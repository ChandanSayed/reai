import { useState } from 'react';
import ChatModal from './ChatModal';
import { useImmer } from 'use-immer';

export default function ListToSell() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showChatInput, setShowChatInput] = useState(true);
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
    setConversions(draft => {
      draft.push({ message: inputValue, type: 'outgoing', avatar: false }, { message: 'Okay! Please choose a picture of your living room like it looks now.', avatar: false, type: 'incoming' });
      setInputValue('');
      setShowChatInput(false);
    });
  }
  return <ChatModal showChatInput={showChatInput} uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} placeHolder="I.e. ‘123 Main St, Anytown, USA’" conversions={conversions} inputValue={inputValue} setInputValue={setInputValue} handleForm={handleForm} />;
}
