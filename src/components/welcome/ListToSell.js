import { useState } from 'react';
import ChatModal from './ChatModal';
import { useImmer } from 'use-immer';

export default function ListToSell() {
  const [uploadedImages, setUploadedImages] = useState([]);
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
  const [inputValue, setInputValue] = useState('');

  function handleForm(e) {
    e.preventDefault();
  }
  return <ChatModal uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} placeHolder="I.e. ‘123 Main St, Anytown, USA’" conversions={conversions} inputValue={inputValue} setInputValue={setInputValue} handleForm={handleForm} />;
}
