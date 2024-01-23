import Copilot from '/public/images/copilot.png';
import ChatField from './ChatField';
import Image from 'next/image';
import { useState } from 'react';

export default function Screen2({ length, setScreenCount }) {
  const [feedback, setFeedback] = useState('');
  return (
    <div>
      <div className="outgoing-chat flex items-center justify-end pb-4 pr-3">
        <ChatField text={`${length} images uploaded`} styles={`bg-button-disabled after:-right-1.5 after:bg-button-disabled`} />
      </div>
      <div className="incoming-chat flex items-center gap-5 pt-7">
        <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
        <ChatField text={`Please add any special features of your property or recent renovations.`} styles={`bg-white after:-left-1.5 after:bg-white`} />
      </div>
      <div className="sm:w-2/3 rounded-10 bg-white p-6 pb-8 ml-auto border border-border-color my-10">
        <p className="font-normal text-sm sm:text-15 mb-4">Features can be separated by ‘,’</p>
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} name="features" id="features" placeholder="i.e. ‘swimming pool, bathroom renovated in 2020’" className="border border-border-color rounded-10 p-5 font-normal text-sm sm:text-base w-full" cols="30" rows="6"></textarea>
      </div>
      <div className="w-max ml-auto my-5">
        <button className="underline font-normal text-sm md:text-15 mt-4">Reset Chat</button>
        <button onClick={() => setScreenCount('screen3')} disabled={feedback.trim() === ''} className={`${feedback.trim() === '' ? 'bg-button-disabled' : 'bg-button-color'} h-10 w-32 text-center text-white hover:bg-opacity-80 text-sm sm:text-15 font-semibold rounded-lg ml-6`}>
          Next
        </button>
      </div>
    </div>
  );
}
