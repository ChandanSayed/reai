import Sidebar from '@/components/sharing/Sidebar';
import Para from '/public/images/para.png';
import Image from 'next/image';

export default function page() {
  const savedHistory = [
    {
      time: '12/10/2023 6:18 pm',
      category: 'REbot',
      desc: '“I need information about following address:…”',
      img: '',
      buttonText: 'Resume'
    },
    {
      time: '12/10/2023 5:22 pm',
      category: 'REimagine',
      desc: '“Modern home office with stand up desk”',
      img: Para,
      buttonText: 'Resume'
    }
  ];
  return (
    <div className={`flex gap-2 bg-onboard-bg min-h-screen border pr-4 md:pr-6`}>
      <Sidebar />
      <div className="saved pt-12 pl-4 sm:pl-12 flex-1">
        <h3 className="font-bold text-base sm:text-lg mb-6">Your saved history</h3>
        <div className="saved-history">
          {savedHistory.map((item, i) => {
            return (
              <div className="card max-w-1024 w-full rounded-10 bg-white shadow-onboard-shadow flex flex-col sm:flex-row items-center gap-6 px-4 py-10 mb-4" key={i}>
                <p className="text-sm sm:text-15">{item.time}</p>
                <p className="w-20 text-sm sm:text-15">{item.category}</p>
                <div className="flex items-center">
                  {item.img && <Image src={item.img} alt="history image" />}
                  <p className="text-sm sm:text-15 font-normal ml-2">{item.desc}</p>
                </div>
                <button className="bg-text-color w-32 rounded-lg text-sm sm:text-15 text-white hover:bg-opacity-80 h-10 mx-auto sm:mr-0 sm:ml-auto">{item.buttonText}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
