import Image from 'next/image';
import ChatField from './ChatField';
import Copilot from '/public/images/copilot.png';
import Send from '/public/images/send.png';

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
  return (
    <div className="remodel my-11 pl-4 sm:pl-11 max-w-1024 w-full min-h-full">
      {conversions.map((conversion, i) => {
        // Condition for incoming and outgoing message display
        if (conversion.type === 'incoming') {
          return (
            <div className="incoming-chat flex items-center gap-5 pb-4" key={i}>
              <div className="w-11 h-11 md:w-90 md:h-90">{conversion.avatar && <Image src={Copilot} placeholder="blur" alt="Copilot" className="rounded-full w-full min-w-11 sm:min-w-90" />}</div>
              <ChatField text={conversion.message} styles={`bg-white after:-left-1.5 after:bg-white`} />
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
      <div className="incoming-chat flex items-center justify-end pt-6">
        <div className="max-w-580 w-full">
          <form action="#" className="bg-white border border-border-color rounded-lg px-8 py-11">
            <div className="relative">
              <input type="text" placeholder="i.e. ‘living room’" className="text-off-color rounded-lg font-normal text-sm sm:text-base px-6 py-4 border border-border-color w-full" />
              <button type="submit" className="bg-button-disabled rounded-lg absolute top-2 right-2 p-3">
                <Image src={Send} quality={100} alt="Send" className="w-3.5" />
              </button>
            </div>
          </form>
          <button className="underline font-normal text-sm md:text-15 block ml-auto mt-4">Reset Chat</button>
        </div>
      </div>
    </div>
  );
}
