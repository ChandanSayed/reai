import RightSidebar from '@/components/welcome/RightSidebar';
import Sidebar from '@/components/welcome/Sidebar';
import Copilot from '/public/images/copilot.png';
import Image from 'next/image';
import QueryButtons from '@/components/welcome/QueryButtons';

const page = () => {
  return (
    <div className="w-auto h-auto flex justify-between gap-2 bg-onboard-bg border pr-4 md:pr-6">
      <Sidebar />
      <div className="flex-1 rounded-2xl font-bold pt-3 pl-4 md:pl-10 max-md:flex-col flex justify-between items-start gap-12">
        <div className="flex-1">
          <p className="font-bold text-3xl mt-11 mb-10">Welcome Roger!</p>
          <div className="incoming-chat flex items-center gap-5">
            <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
            <div className="bg-white shadow-onboard-shadow p-4 rounded-lg relative after:absolute after:rounded-sm after:w-4 after:h-5 after:-left-1.5 after:top-4 after:transform after:rotate-45 after:-z-0 after:bg-white after:block">
              <p className="text-sm md:text-base">Hey Niclas! I’m your copilot How can I help you today?</p>
            </div>
          </div>
          <QueryButtons />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
