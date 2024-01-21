import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropUploader = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 4) {
      console.log('You can upload a maximum of 4 images.');
      return;
    }
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
    setUploadedImages(() => [...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
    maxFiles: 4
  });

  return (
    <div className="container mx-auto p-8">
      <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-8 flex justify-center items-center">
        <input {...getInputProps()} />
        <p className="text-gray-600 text-lg">Drag & drop images here, or click to select them</p>
      </div>
      {uploadedImages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Uploaded Images</h2>
          <div className="flex flex-wrap gap-4">
            {uploadedImages.map((image, index) => (
              <img key={index} src={image} alt={`Uploaded ${index}`} className="max-w-full" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDropUploader;
