import Image from 'next/image';
import Send from '/public/images/send.png';

export default function ChatForm({ handleForm, inputValue, setInputValue }) {
  return (
    <div className="chat-form flex items-center justify-end pt-6">
      <div className="max-w-580 w-full">
        <form onSubmit={handleForm} action="#" className="bg-white border border-border-color rounded-lg px-8 py-11">
          <div className="relative">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="i.e. ‘living room’" className="placeholder:text-off-color rounded-lg font-normal text-sm sm:text-base px-6 py-4 border border-border-color w-full" />
            <button type="submit" disabled={inputValue} className={`${inputValue ? 'bg-button-color' : 'bg-button-disabled'} rounded-lg absolute top-2 right-2 p-3`}>
              <Image src={Send} quality={100} alt="Send" className="w-3.5" />
            </button>
          </div>
        </form>
        <button className="underline font-normal text-sm md:text-15 block ml-auto mt-4">Reset Chat</button>
      </div>
    </div>
  );
}
