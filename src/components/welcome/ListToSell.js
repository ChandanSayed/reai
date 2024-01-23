import React, { useState } from 'react';
import ChatModal from './ChatModal';

export default function ListToSell() {
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
      message: `Please tell some details about the property you want to list for sale. What’s the address?`,
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
