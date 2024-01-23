import { useState } from 'react';
import ChatModal from './ChatModal';

export default function Remodel() {
  const conversions = [
    {
      message: `Hey Niclas! I’m your copilot How can I help you today?`,
      avatar: true,
      type: 'incoming'
    },
    {
      message: `Remodel`,
      avatar: false,
      type: 'outgoing'
    },
    {
      message: `Sure! What type of room do you want to remodel?`,
      avatar: false,
      type: 'incoming'
    }
  ];
  const [inputValue, setInputValue] = useState('');

  function handleForm(e) {
    e.preventDefault();
  }

  return <ChatModal conversions={conversions} inputValue={inputValue} setInputValue={setInputValue} handleForm={handleForm} />;
}