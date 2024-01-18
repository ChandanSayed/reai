import Image from 'next/image';
import Close from '/public/images/close.png';

export default function Header() {
  return (
    <div className="flex justify-between items-center text-text-color mb-12">
      <h2 className="text-3xl">Sign Up</h2>
      {/* <IoCloseOutline className="cursor-pointer text-2xl" /> */}
      <Image className="cursor-pointer text-2xl" src={Close} alt="close" quality={100} />
    </div>
  );
}
