import Image from 'next/image';
import ChatField from './ChatField';
import Copilot from '/public/images/copilot.png';
import ChatForm from './ChatForm';

export default function ChatModal({ inputValue, setInputValue, handleForm, conversions, placeHolder, showChatInput = true, uploadedImages, setUploadedImages, hideChatForm }) {
  return (
    <div className="my-11 pl-4 sm:pl-11 max-w-1024 w-full">
      {conversions.map((conversion, i) => {
        // Condition for incoming and outgoing message display
        if (conversion.type === 'incoming') {
          return (
            <div className="incoming-chat flex items-center gap-5 pb-4 max-w-580" key={i}>
              <div className="w-11 h-11 md:w-90 md:h-90">{conversion.avatar && <Image src={Copilot} placeholder="blur" alt="Copilot" className="rounded-full w-full min-w-11 sm:min-w-90" />}</div>
              <div className="flex-1">
                <ChatField text={conversion.message} styles={`bg-white after:-left-1.5 after:bg-white`} />
              </div>
            </div>
          );
        } else {
          return (
            <div className="outgoing-chat flex items-center justify-end pb-4 pr-3" key={i}>
              <ChatField text={conversion.message} styles={`bg-button-disabled after:-right-1.5 after:bg-button-disabled`} />
            </div>
          );
        }
      })}
      {!hideChatForm && <ChatForm uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} inputValue={inputValue} setInputValue={setInputValue} handleForm={handleForm} placeHolder={placeHolder} showChatInput={showChatInput} />}
    </div>
  );
}
