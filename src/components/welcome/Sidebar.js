import Image from 'next/image';
import Settings from '/public/images/setting.png';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white pb-8 flex-col h-screen max-md:absolute max-md:top-0 max-md:bottom-0 max-lg:z-50 max-md:-left-64">
      <div className="pt-8">
        <div className="flex justify-evenly">
          <div className="bg-bg-off-lime flex items-center justify-center w-10 h-10 text-center rounded-full">
            <h1 className="font-medium text-sm">RH</h1>
          </div>
          <div>
            <h1 className="font-medium text-15">RogerHolland</h1>
            <p className="text-sm text-off-color">homeowner</p>
          </div>
          <div className="pt-2">
            <Image src={Settings} quality={100} alt="Settings" className="w-3 h-3" />
          </div>
        </div>
        <div className="mt-5 w-10/12 mx-auto border-b border-dotted border-slate-200"></div>
      </div>
      <div className="pl-8 pt-5 flex flex-col justify-between h-[calc(100%-96px)]">
        <ul className="font-medium text-15 text-black">
          <li className="mb-5">
            <a className="text-off-blue" href="#">
              dashboard
            </a>
          </li>
          <li className="mb-5">
            <a href="#">REimagine</a>
          </li>
          <li className="mb-5">
            <a href="#">Ai Listing</a>
          </li>
          <li className="mb-5">
            <a href="#">REbot</a>
          </li>
          <li className="mb-5">
            <a href="#">Saved</a>
          </li>
        </ul>
        <Link href={'/'}>
          <p className="font-semibold text-2xl">
            re<span className="text-blue-600">ai</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
