// lib/n0cStorage.js
import AWS from 'aws-sdk';
import { S3Client } from '@aws-sdk/client-s3';

import { Client } from 'minio';

/* const s3Client = new AWS.S3({
  accessKeyId: process.env.N0C_ACCESS_KEY_ID,
  secretAccessKey: process.env.N0C_SECRET_ACCESS_KEY,
  endpoint: process.env.N0C_ENDPOINT, // e.g., 'https://s3.your-n0c-storage-provider.com'
  s3ForcePathStyle: true, // Ensure to use path style URLs
  signatureVersion: 'v4', // Use the appropriate signature version if required

  region: process.env.N0C_REGION,
});

export default s3Client; */

// lib/n0cStorage.ts
//import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new AWS.S3({
  region: process.env.N0C_REGION, // Specify your region
  credentials: {
    accessKeyId: process.env.N0C_ACCESS_KEY_ID!,
    secretAccessKey: process.env.N0C_SECRET_ACCESS_KEY!,
  },
  endpoint: `${process.env.N0C_ENDPOINT}`, // e.g., 'https://s3.your-n0c-storage-provider.com',
  s3ForcePathStyle: true, 
  signatureVersion: 'v4',
  
 /*  httpOptions: {
   
  }, */
  
});

const minioClient = new Client({
  endPoint: process.env.N0C_ENDPOINT!,
  port: 5443,
  useSSL: true,
  accessKey: process.env.N0C_ACCESS_KEY_ID!,
  secretKey: process.env.N0C_SECRET_ACCESS_KEY!,
  region:process.env.N0C_REGION!,

});


//export default s3Client;


export { s3Client };

export default minioClient;

