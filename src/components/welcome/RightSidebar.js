import Image from 'next/image';

import Home from '/public/images/home.png';
import House from '/public/images/house.png';

export default function RightSidebar() {
  return (
    <div className="bg-sidebar-bg px-4 sm:px-7 mt-10 mb-6 rounded-lg w-full sm:w-304 pt-7 pb-1">
      <h1 className="font-bold text-3xl mb-5">Suggestions</h1>
      <div className="card mb-9">
        <p className="text-15 font-medium mb-4">Remodel</p>
        <Image src={Home} alt="Home" className="w-full max-h-40" quality={100} />
        <button className="bg-button-color block hover:bg-blue-700 mx-auto rounded text-white px-8 py-2 mt-5">Go to</button>
      </div>
      <div className="card mb-9">
        <p className="text-15 font-medium mb-4">Ai Listing</p>
        <Image src={House} alt="Home" className="w-full max-h-40" quality={100} />
        <button className="bg-button-color block hover:bg-blue-700 mx-auto rounded text-white px-8 py-2 mt-5">Go to</button>
      </div>
    </div>
  );
}
