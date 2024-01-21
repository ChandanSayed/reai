'use client';
import { useState } from 'react';
import DragAndDropUploader from './DragAndDropUploader';

const page = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUpload = files => {
    // Update the state with the newly uploaded images
    setUploadedImages(prevImages => [...prevImages, ...files]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Image Uploader</h1>
      <DragAndDropUploader />
    </div>
  );
};

export default page;
