import Image from 'next/image';
import ChatField from './ChatField';
import ImageSlider from './ImageSlider';
import PropertyDescription from './PropertyDescription';
import PropertyDetails from './PropertyDetails';
import PropertyFeatures from './PropertyFeatures';
import Copilot from '/public/images/copilot.png';

export default function GeneratedList() {
  return (
    <>
      <div className="incoming-chat flex items-center gap-5 pt-7 mb-10">
        <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
        <ChatField text={`Okay. Please upload pictures of the house next.`} styles={`bg-white after:-left-1.5 after:bg-white`} />
      </div>
      <div className="max-w-720 w-full mx-auto mb-12">
        <ImageSlider />
        <PropertyDetails />
        <PropertyDescription />
        <PropertyFeatures />
      </div>
    </>
  );
}
