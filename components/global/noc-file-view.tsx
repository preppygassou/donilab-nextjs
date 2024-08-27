import React from 'react';

const NocFileView = ({ imageUrl, videoUrl }:{imageUrl?:any, videoUrl?:any}) => {
  return (
    <div>
      <h2>Uploaded Image</h2>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}

      <h2>Uploaded Video</h2>
      {videoUrl && (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default NocFileView;
