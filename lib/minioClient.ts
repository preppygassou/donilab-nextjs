// lib/minioClient.ts
import { Client } from 'minio';

const minioClient = new Client({
  endPoint: process.env.N0C_ENDPOINT!.replace('https://', ''),
  port: 5443,
  useSSL: true,
  accessKey: process.env.N0C_ACCESS_KEY_ID!,
  secretKey: process.env.N0C_SECRET_ACCESS_KEY!,
});

export default minioClient;
