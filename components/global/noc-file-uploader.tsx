import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<{ url: string; key: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('/api/uploadit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      setUploadedFile({
        url: response.data.url,
        key: response.data.key,
      });
      console.log('File uploaded successfully:', response.data.url);
      console.log('File key:', response.data.key);
    } else {
      console.error('Failed to upload file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 button col-span-2 w-full' onClick={handleUpload}>Upload</button>
      {/* {uploadedFile && (
        <div>
          <h3>Uploaded File:</h3>
          <p>URL: {uploadedFile.url}</p>
          <p>Key: {uploadedFile.key}</p>
        </div>
      )} */}
    </div>
  );
};

export default UploadComponent;
