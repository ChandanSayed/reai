import React from 'react';

const page = () => {
  return (
    <div className="w-auto h-auto flex justify-between m-32 border">
      <div className="w-1/6 bg-white pt-10">
        <div className="flex justify-evenly">
          <div className="bg-lime-300 w-8 h-8 text-center pt-1 mt-1 rounded-full">
            <h1>RH</h1>
          </div>
          <div>
            <h1 className="font-medium">RogerHolland</h1>
            <p className="opacity-40 leading-3">homeowner</p>
          </div>
          <div className="pt-2">
            <img src="images/setting.png" alt="image" className="w-3 h-3" />
          </div>
        </div>
        <div className="h-7 w-10/12 mx-auto border-b border-dotted border-slate-200"></div>
        <div className="pl-8 pt-10 leading-10">
          <p className="text-blue-600">dashboard</p>
          <p>REimagine</p>
          <p>Ai Listing</p>
          <p>REbot</p>
          <p>Saved</p>
          <p className="pt-56">
            re<span className="text-blue-600">ai</span>
          </p>
        </div>
      </div>
      <div className="w-5/6 bg-gradient-to-r from-slate-100 to-slate-50 font-bold pt-3 pl-10 flex justify-between">
        <div>
          <p className="font-bold text-xl">Welcome Roger!</p>
          <p className="leading-10 opacity-80 text-sm font-bold">Your History</p>
          <div className="flex justify-between align-middle w-full h-20 bg-white mt-5 gap-10 pt-7 text-xs opacity-60 px-3">
            <p>12/10/2023 6:18pm</p>
            <p>REbot</p>
            <p>"I need information about following adress...."</p>
            <button className="w-20 h-7 bg-black text-white pb-1 rounded">Resume</button>
          </div>
          <div className="flex justify-between align-middle w-full h-20 bg-white mt-5 gap-10 text-xs px-3">
            <p className="opacity-60 pt-7">12/10/2023 6:18pm</p>
            <p className="opacity-60 pt-7">REimagine</p>
            <img className="" src="images/para.png" alt="image" />
            <p className="opacity-60 pt-7">"modern home office with stand up desk"</p>
            <button className="w-20 h-7 bg-black text-white pb-1 rounded opacity-60 mt-7">Resume</button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 mt-10 ml-96 rounded text-white px-3 pb-1">New Session</button>
        </div>
        <div className="w-1/6 bg-slate-200 pl-4 pt-6 mr-4 mt-10 mb-32 rounded-lg">
          <h1>Suggestions</h1>
          <p className="text-xs opacity-60">Remodel</p>
          <img src="images/home.png" alt="image" />
          <button className="bg-blue-600 hover:bg-blue-700 ml-4 rounded text-white px-8 pb-1 mt-5">Go to</button>
          <p className="mt-5 mb-3 text-xs opacity-60">Ai Listing</p>
          <img src="images/house.png" alt="image" />
          <button className="bg-blue-600 hover:bg-blue-700 ml-4 rounded text-white px-8 pb-1 mt-5">Go to</button>
        </div>
      </div>
    </div>
  );
};

export default page;
