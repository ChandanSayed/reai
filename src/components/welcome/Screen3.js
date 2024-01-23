import ChatField from './ChatField';
import { useImmer } from 'use-immer';

import Copilot from '/public/images/copilot.png';
import Loader from '/public/images/loader.gif';
import Image from 'next/image';

export default function Screen3() {
  const [conversions, setConversions] = useImmer([
    {
      message: `Please add any special features of your property or recent renovations.`,
      avatar: true,
      type: 'incoming'
    },
    {
      message: `Fire place, balcony`,
      avatar: false,
      type: 'outgoing'
    },
    {
      message: `Please wait, the AI is now generating the listing.`,
      avatar: false,
      type: 'incoming'
    }
  ]);
  return (
    <div className="my-11 pl-4 sm:pl-11 max-w-1024 w-full">
      {conversions.map((conversion, i) => {
        // Condition for incoming and outgoing message display
        if (conversion.type === 'incoming') {
          return (
            <div className="incoming-chat flex sm:items-center gap-5 pb-4 max-w-580" key={i}>
              <div className="w-11 h-11 md:max-w-90 md:w-full md:h-90">{conversion.avatar && <Image src={Copilot} placeholder="blur" alt="Copilot" className="rounded-full w-full min-w-11 sm:min-w-90" />}</div>
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
      <div className="mt-16 mb-10">
        <Image alt="Loader" src={Loader} className="w-20 block mx-auto" /> <p className="text-xs sm:text-sm text-off-color text-center">Processing your request</p> <button className="underline font-normal block mx-auto text-sm sm:text-15">Cancel</button>
      </div>
    </div>
  );
}
