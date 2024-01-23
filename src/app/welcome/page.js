'use client';
import RightSidebar from '@/components/welcome/RightSidebar';
import Sidebar from '@/components/welcome/Sidebar';
import Copilot from '/public/images/copilot.png';
import Image from 'next/image';
import QueryButtons from '@/components/welcome/QueryButtons';
import ChatField from '@/components/welcome/ChatField';
import Remodel from '@/components/welcome/Remodel';
import { useState } from 'react';

const page = () => {
  const [actionType, setActionType] = useState('');
  return (
    <div className="w-auto h-auto flex justify-between gap-2 bg-onboard-bg border pr-4 md:pr-6">
      <Sidebar />
      {actionType === '' && (
        <div className="flex-1 rounded-2xl font-bold pt-3 pl-4 md:pl-10 max-md:flex-col flex justify-between items-start gap-12">
          <div className="flex-1 max-w-1024">
            <p className="font-bold text-3xl mt-11 mb-10">Welcome Roger!</p>
            <div className="incoming-chat flex items-center gap-5">
              <Image src={Copilot} placeholder="blur" alt="Copilot" className="w-11 h-11 md:w-90 md:h-90 rounded-full" />
              <ChatField text={`Hey Niclas! I’m your copilot How can I help you today?`} styles={`bg-white after:-left-1.5 after:bg-white`} />
            </div>

            <QueryButtons setActionType={setActionType} />
          </div>
          <RightSidebar />
        </div>
      )}
      {actionType.toLowerCase() === 'remodel' && <Remodel />}
    </div>
  );
};

export default page;
