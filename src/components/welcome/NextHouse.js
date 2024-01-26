import React, { useCallback, useState } from 'react';
import ChatField from './ChatField';
import Image from 'next/image';
import Copilot from '/public/images/copilot.png';
import { useDropzone } from 'react-dropzone';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import GeneratedList from './GeneratedList';

export default function NextHouse() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [screenCount, setScreenCount] = useState('screen1');
  const [showGeneratedList, setShowGeneratedList] = useState(false);
  const onDrop = useCallback(acceptedFiles => {
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
    setUploadedImages(() => [...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true
  });

  return (
    <div className="max-w-1024 w-full mt-9 pl-4 sm:pl-10">
      {screenCount === 'screen1' && (
        <>
          <div className="incoming-chat flex items-center gap-5 pt-7">
            <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
            <ChatField text={`Okay. Please upload pictures of the house next.`} styles={`bg-white after:-left-1.5 after:bg-white`} />
          </div>
          <div className="sm:w-2/3 rounded-10 bg-white p-8 ml-auto border border-border-color mt-10">
            {!uploadedImages.length > 0 && (
              <div className="w-full border border-border-color rounded-lg" {...getRootProps()}>
                <input {...getInputProps()} />
                <button className="w-32 block bg-button-color text-white h-10 rounded-lg font-semibold text-center mx-auto mt-16 mb-4">Choose</button>
                <p className="text-sm	font-medium mb-7 text-center">Or drag & drop</p>
              </div>
            )}
            {uploadedImages.length > 0 && (
              <div className="border px-4 py-6 flex flex-wrap rounded-lg gap-2.5 pt-6">
                {uploadedImages.map((image, index) => (
                  <Image key={index} width={'112'} height={'112'} src={image} alt={`Uploaded ${index}`} className="object-fill h-28 w-28" />
                ))}
              </div>
            )}
          </div>
          <div className="w-max ml-auto my-5">
            <button className="underline font-normal text-sm md:text-15 mt-4">Reset Chat</button>
            <button onClick={() => setScreenCount('screen2')} disabled={uploadedImages.length === 0} className={`${uploadedImages.length === 0 ? 'bg-button-disabled' : 'bg-button-color'} h-10 w-32 text-center text-white hover:bg-opacity-80 text-sm sm:text-15 font-semibold rounded-lg ml-6`}>
              Next
            </button>
          </div>
        </>
      )}
      {screenCount === 'screen2' && (
        <>
          <Screen2 length={uploadedImages.length} setScreenCount={setScreenCount} />
        </>
      )}
      {screenCount === 'screen3' && (
        <>
          <Screen3 setShowGeneratedList={setScreenCount} length={uploadedImages.length} />
        </>
      )}
      {screenCount === 'generated-list' && <GeneratedList />}
    </div>
  );
}
