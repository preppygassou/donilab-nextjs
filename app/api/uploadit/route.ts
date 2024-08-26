// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import {createRouter, expressWrapper} from 'next-connect';
import multer from 'multer';
import minioClient from '@/lib/n0cStorage';
import { v4 as uuidv4 } from 'uuid';

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  const file = req.file;
  const key = `${uuidv4()}_${file.originalname}`;
  
  try {
    await minioClient.putObject(
      process.env.N0C_BUCKET_NAME!,
      key,
      file.buffer,
      {
        'Content-Type': file.mimetype,
      }
    );

    const url = `https://${process.env.N0C_ENDPOINT}/${process.env.N0C_BUCKET_NAME}/${key}`;
    res.status(200).json({ url, key });
  } catch (error) {
    console.error('Error uploading to n0C Storage:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

/* export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since we're using multer
  },
}; */

export default apiRoute;
