import Image from 'next/image';
import ChatField from './ChatField';
import ImageSlider from './ImageSlider';
import PropertyDescription from './PropertyDescription';
import PropertyDetails from './PropertyDetails';
import PropertyFeatures from './PropertyFeatures';
import Copilot from '/public/images/copilot.png';

export default function GeneratedList() {
  const buttonText = [
    {
      name: 'Connect me to agent'
    },
    { name: 'Remodel' },
    { name: 'Ask for advice' },
    { name: 'List to sell' },
    { name: 'Get transaction support' },
    { name: 'Make a custom request' }
  ];

  return (
    <>
      <div className="incoming-chat flex items-center gap-5 pt-7 mb-10">
        <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
        <ChatField text={`Okay. Please upload pictures of the house next.`} styles={`bg-white after:-left-1.5 after:bg-white`} />
      </div>
      <div className="max-w-720 w-full mx-auto mb-4">
        <ImageSlider />
        <PropertyDetails />
        <PropertyDescription />
        <PropertyFeatures />
      </div>
      <div className="buttons text-right max-w-465 ml-auto">
        <button className="underline font-normal text-sm md:text-15 mt-4">Reset Chat</button>
        <button className="font-semibold p-3 rounded-lg text-sm md:text-15 mt-4 mx-3 bg-text-color text-white hover:bg-opacity-80">Publish to FSBO</button>
        <button className="font-semibold p-3 rounded-lg text-sm md:text-15 mt-4 bg-button-color text-white hover:bg-opacity-80">Reset Chat</button>
      </div>
      <div className="text-right max-w-465 ml-auto mt-9 mb-6">
        <h4 className="text-sm sm:text-base font-medium text-left">What do you want to to next?</h4>
        <p className="text-off-color text-xs sm:text-sm text-left font-normal mt-1.5 mb-4">Please choose one of the four main task below, or make custom request which will be supported separately</p>
        {buttonText.map((btn, i) => (
          <button onClick={() => handleButtonAction(btn.name)} className="rounded-lg border mr-1 mb-2 bg-white border-button-color py-2 px-4 text-sm sm:text-base font-normal" key={i}>
            {btn.name}
          </button>
        ))}
      </div>
    </>
  );
}
