'use client';
import Seller from '/public/images/Seller.png';
import Buyer from '/public/images/Buyer.png';
import Agent from '/public/images/Agent.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Step1({ setStep }) {
  const [stepValue, setStepValue] = useState('');
  function handleRadio(e) {
    setStepValue(e.target.value);
  }
  return (
    <section className="max-w-580 p-4 sm:p-8 w-full bg-white m-auto my-16 h-712 border-text-color rounded-xl border-solid shadow-onboard-shadow">
      <div className="pt-4">
        <h2 className="text-3xl font-medium mb-4">Welcome Roger!</h2>
        <p className="text-base font-normal mb-20">You are just a few more steps away from getting started!</p>
        <h5 className="text-base font-medium mb-10">How do you intend to use REAI?</h5>
      </div>
      <div className="flex justify-around text-center gap-2 mb-20 sm:mb-32">
        <div className="w-1/3">
          <div className="border border-border-color rounded-full max-w-max mx-auto py-3 sm:py-3.5 overflow-hidden">
            <Image className="max-w-24 sm:max-w-32" src={Seller} alt="Seller" placeholder="blur" quality={100} />
          </div>
          <p className="mt-2 text-xs sm:text-sm max-sm:h-8">I’m a homeowner</p>
          <input onChange={handleRadio} type="radio" name="step" className="h-5 w-5 mt-2" value={'step1'} />
        </div>
        <div className="w-1/3">
          <div className="border border-border-color rounded-full max-w-max mx-auto py-3 sm:py-3.5 overflow-hidden">
            <Image className="max-w-24 sm:max-w-32" src={Buyer} alt="Buyer" placeholder="blur" quality={100} />
          </div>
          <p className="mt-2 text-xs sm:text-sm max-sm:h-8">I want to buy a home</p>
          <input onChange={handleRadio} type="radio" name="step" className="h-5 w-5 mt-2" value={'step2'} />
        </div>
        <div className="w-1/3">
          <div className="border border-border-color rounded-full max-w-max mx-auto py-3 sm:py-3.5 overflow-hidden">
            <Image className="max-w-24 sm:max-w-32" src={Agent} alt="agent" placeholder="blur" quality={100} />
          </div>
          <p className="mt-2 text-xs sm:text-sm max-sm:h-8">I’m an agent</p>
          <input onChange={handleRadio} type="radio" name="step" className="h-5 w-5 mt-2" value={'step3'} />
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-disabled rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-disabled rounded-full"></div>
      </div>
      <div className="w-full mt-8 mb-8">
        <button onClick={() => setStep('step2')} disabled={!stepValue} className={`w-32 block mx-auto ${stepValue ? 'bg-button-color' : 'bg-button-disabled'} font-semibold text-white h-10 rounded-lg`}>
          Next
        </button>
      </div>
    </section>
  );
}
