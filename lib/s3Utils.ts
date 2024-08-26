/* // lib/s3Utils.ts
import crypto from 'crypto';

const getSignatureKey = (key: string, date: string, region: string, service: string) => {
  const kDate = crypto.createHmac('sha256', `AWS4${key}`).update(date).digest();
  const kRegion = crypto.createHmac('sha256', kDate).update(region).digest();
  const kService = crypto.createHmac('sha256', kRegion).update(service).digest();
  const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest();
  return kSigning;
};

export const createS3PresignedUrl = (bucket: string, key: string, contentType: string) => {
  const method = 'PUT';
  const endpoint = process.env.N0C_ENDPOINT!;
  const host = `${bucket}.${endpoint}`;
  const region = process.env.N0C_REGION!;
  const accessKeyId = process.env.N0C_ACCESS_KEY_ID!;
  const secretAccessKey = process.env.N0C_SECRET_ACCESS_KEY!;
  const expires = 3600; // 1 hour

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.substr(0, 8);

  const canonicalUri = `/${key}`;
  const canonicalQuerystring = `X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=${encodeURIComponent(
    `${accessKeyId}/${dateStamp}/${region}/s3/aws4_request`
  )}&X-Amz-Date=${amzDate}&X-Amz-Expires=${expires}&X-Amz-SignedHeaders=host`;

  const canonicalHeaders = `host:${host}\n`;
  const signedHeaders = 'host';
  const payloadHash = crypto.createHash('sha256').update('', 'utf8').digest('hex');

  const canonicalRequest = `${method}\n${canonicalUri}\n${canonicalQuerystring}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
  const algorithm = 'AWS4-HMAC-SHA256';
  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${crypto
    .createHash('sha256')
    .update(canonicalRequest, 'utf8')
    .digest('hex')}`;

  const signingKey = getSignatureKey(secretAccessKey, dateStamp, region, 's3');
  const signature = crypto.createHmac('sha256', signingKey).update(stringToSign).digest('hex');

  const presignedUrl = `${host}${canonicalUri}?${canonicalQuerystring}&X-Amz-Signature=${signature}`;

  return presignedUrl;
};
 */