import Image from 'next/image';
import Send from '/public/images/send.png';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';

export default function ChatForm({ handleForm, inputValue, setInputValue, placeHolder, showChatInput, uploadedImages, setUploadedImages }) {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 1) {
      console.log('You can upload a maximum of 1 image.');
      return;
    }
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
    setUploadedImages(() => [...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1
  });

  return (
    <div className="chat-form flex items-center justify-end pt-6">
      <div className="max-w-580 w-full">
        {showChatInput && (
          <form onSubmit={handleForm} className="bg-white border border-border-color rounded-lg px-8 py-11">
            <div className="relative">
              <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder={placeHolder} className="placeholder:text-off-color rounded-lg font-normal text-sm sm:text-base px-6 py-4 border border-border-color w-full" />
              <button type="submit" disabled={inputValue === ''} className={`${inputValue ? 'bg-button-color' : 'bg-button-disabled'} rounded-lg absolute top-2 right-2 p-3 cursor-pointer`}>
                <Image src={Send} quality={100} alt="Send" className="w-3.5" />
              </button>
            </div>
          </form>
        )}
        <div className="ml-auto w-max">
          <button className="underline font-normal text-sm md:text-15 mt-4">Reset Chat</button>
          {!showChatInput && (
            <>
              <input {...getInputProps()} />
              <button {...getRootProps()} className="bg-button-color h-10 w-32 text-center text-white hover:bg-opacity-80 text-sm sm:text-15 font-semibold rounded-lg ml-6">
                Choose
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
