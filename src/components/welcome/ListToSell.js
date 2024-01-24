import { useCallback, useEffect, useState } from 'react';
import ChatModal from './ChatModal';
import { useImmer } from 'use-immer';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import Loader from '/public/images/loader.gif';
import GeneratedImage from '/public/images/generated-image.png';
import Copilot from '/public/images/copilot.png';
import ChatField from './ChatField';

export default function ListToSell() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showChatInput, setShowChatInput] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [hideChatForm, setHideChatForm] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(false);
  const [conversions, setConversions] = useImmer([
    {
      message: `Hey Niclas! I’m your copilot How can I help you today?`,
      avatar: true,
      type: 'incoming'
    },
    {
      message: `List to sell`,
      avatar: false,
      type: 'outgoing'
    },
    {
      message: `Please tell some details about the property you want to list for sale. What’s the address?`,
      avatar: false,
      type: 'incoming'
    }
  ]);
  const [conversions2, setConversions2] = useImmer([
    {
      message: `What do you want the room to look like?`,
      avatar: true,
      type: 'incoming'
    }
  ]);
  const buttonText = [{ name: 'Generate new image' }, { name: 'Go to listing to sell' }, { name: 'Q&A Advise' }, { name: 'Request guidance on renovation with this design' }];

  function handleForm(e) {
    e.preventDefault();
    setConversions(draft => {
      draft.push({ message: inputValue, type: 'outgoing', avatar: false }, { message: 'Okay! Please choose a picture of your living room like it looks now.', avatar: false, type: 'incoming' });
      setInputValue('');
      setShowChatInput(false);
    });
  }
  // generate handler function
  const generateHandler = e => {
    e.preventDefault();
    setHideChatForm(true);
    setTimeout(() => {
      setGeneratedImage(true);
    }, 2000);
  };

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 1) {
      console.log('You can upload a maximum of 1 image.');
      return;
    }
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
    setUploadedImages(() => [...newImages]);
    setShowChatInput(true);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1
  });

  useEffect(() => {
    setShowChatInput(true);
  }, [uploadedImages]);

  return (
    <>
      {uploadedImages.length === 0 ? (
        <ChatModal uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} showChatInput={showChatInput} conversions={conversions} inputValue={inputValue} setInputValue={setInputValue} handleForm={handleForm} placeHolder={`I.e. ‘123 Main St, Anytown, USA’`} />
      ) : (
        <div className="mt-16 flex-1 max-sm:w-full pl-4">
          {!hideChatForm && (
            <>
              <Image src={uploadedImages[0]} className="max-w-580 w-full block mx-auto" alt="Image" width={100} height={100} />
              <input {...getInputProps()} />
              <button {...getRootProps()} className="underline font-normal text-sm sm:text-15 text-center block mx-auto mt-4">
                Choose a different image
              </button>
            </>
          )}
          {!generatedImage && <ChatModal hideChatForm={hideChatForm} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} showChatInput={showChatInput} conversions={conversions2} inputValue={inputValue} setInputValue={setInputValue} handleForm={generateHandler} placeHolder={`i.e. ‘Minimalist modern design’`} />}
          {!generatedImage && hideChatForm && (
            <>
              <Image alt="Loader" src={Loader} className="w-20 block mx-auto" /> <p className="text-xs sm:text-sm text-off-color text-center">Processing your request</p> <button className="underline font-normal block mx-auto text-sm sm:text-15">Cancel</button>
            </>
          )}
          {generatedImage && (
            <div className="max-w-1024 w-full mt-9 pl-4 sm:pl-10 pr-4">
              <Image src={GeneratedImage} alt="Generated Image" className="max-w-580 block mx-auto w-full" />
              <p className="font-normal italic text-sm sm:text-base mt-4 mb-3.5 text-center">“Change color theme from blue to dark green”</p>
              <div className="buttons w-max mx-auto">
                <button className="rounded-lg w-32 py-3 px-3.5 text-white bg-text-color hover:bg-opacity-80 mr-2">New prompt</button>
                <button className="rounded-lg w-32 py-3 px-3.5 text-white bg-button-color hover:bg-opacity-80 ml-2">Save Image</button>
              </div>
              <div className="incoming-chat flex gap-5 pt-7">
                <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
                <ChatField text={`Done! How do you like the remodeling/redesign? If you like it, you can save it and go to next step for Q&A and Advice, or go to Listing to sell. If you like guidance on renovation with this design, please make a custom request and CoPilot will support you here. If you want to generate more images, please continue with new prompt or upload new image for remodeling`} styles={`bg-white after:-left-1.5 after:bg-white`} />
              </div>
              <div className="text-right max-w-580 ml-auto mt-9">
                {buttonText.map((btn, i) => (
                  <button onClick={() => handleButtonAction(btn.name)} className="rounded-lg border mr-2 mb-2 bg-white border-button-color py-2 px-4 text-sm sm:text-base font-normal" key={i}>
                    {btn.name}
                  </button>
                ))}
                <button className="underline font-normal text-sm md:text-15 mt-4 block ml-auto mb-6">Reset Chat</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
