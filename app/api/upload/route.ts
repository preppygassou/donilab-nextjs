// pages/api/upload.ts
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';
/* import s3Client from '@/lib/n0cStorage'; */
import { v4 as uuidv4 } from 'uuid';
/* import { PutObjectCommand } from '@aws-sdk/client-s3'; */
import minioClient from '@/lib/n0cStorage';
/* import { s3Client } from '../../../lib/n0cStorage';
 */
/* type Data = {
  url?: string;
  error?: string;
}; */

interface UploadRequestBody {
  name: string;
  type: string;
  base64File: string;
}

/* export default async function handler(
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
 */

export async function POST(req: Request) {
  const { name, type, base64File } = await req.json();

  //const buffer = Buffer.from(base64File, 'base64');
  const key = `${uuidv4()}_${name}`;

 /*  const params = {
    Bucket: process.env.N0C_BUCKET_NAME!,
    Key: key,
    Body: buffer,
    ContentType: type,
  }; */

  try {
    /* const command = new PutObjectCommand(params);
  const data=  await s3Client.send(command); */
    const url = "`${process.env.N0C_BUCKET_NAME}.${process.env.N0C_ENDPOINT}${key}`";

    //const data = await s3Client.upload(params).promise();
    const metaData={

      'Content-Type': type,
    }
 //await minioClient.putObject(process.env.N0C_BUCKET_NAME!, key, buffer, metaData)
  

   // console.log("data",data)
    return NextResponse.json({ url, key });
    //return NextResponse.json({ url: data.Location, key });

   
    
  } catch (error) {
    console.error('Error uploading to n0C Storage:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}