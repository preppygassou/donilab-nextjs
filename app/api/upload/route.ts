// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';

type Data = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { file } = req.body;
      const uploadResponse = await cloudinary.uploader.upload(file, {
        upload_preset: 'your_upload_preset', // Optional
      });

      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
