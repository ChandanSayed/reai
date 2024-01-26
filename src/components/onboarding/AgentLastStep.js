import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function AgentLastStep() {
  const [inputValues, setInputValues] = useImmer({
    preference: '',
    zip: '',
    state: '',
    min: '',
    max: ''
  });

  const router = useRouter();

  function handleCheck(e) {
    console.log(e.target.value);
    setInputValues(draft => {
      draft[e.target.name] = e.target.value;
    });
  }

  function checkDisable() {
    return inputValues.preference && inputValues.zip && inputValues.state && inputValues.min && inputValues.max;
  }

  return (
    <>
      <div className="">
        <h2 className="text-xl font-semibold mb-12">What are your transaction preferences?</h2>
        <p className="text-base font-semibold">Preferences</p>
        <div className="flex gap-4 mt-5">
          <input className="w-5 h-5 mt-0.5" type="radio" name="preference" value={'check1'} onChange={handleCheck} />
          <p className="text-sm sm:text-15 flex-1">I work as listing agent & buyer agent, but more on listing</p>
        </div>
        <div className="flex gap-4 mt-5">
          <input className="w-5 h-5 mt-0.5" type="radio" name="preference" value={'check2'} onChange={handleCheck} />
          <p className="text-sm sm:text-15 flex-1">I work as listing agent & buyer agent, but more on listing</p>
        </div>
        <div className="flex gap-4 mt-5 mb-9">
          <input className="w-5 h-5 mt-0.5" type="radio" name="preference" value={'check3'} onChange={handleCheck} />
          <p className="text-sm sm:text-15 flex-1">I work as listing agent & buyer agent, but more on listing</p>
        </div>
        <p className="text-base font-semibold">In which area are you mostly working?</p>
        <div className="gap-4 flex mt-3 mb-7">
          <input className="w-24 h-14 rounded-lg border border-border-color p-3" value={inputValues.zip} onChange={handleCheck} placeholder="ZIP" name="zip" type="text" />
          <input className="w-full rounded-lg h-14 border border-border-color p-3" value={inputValues.state} onChange={handleCheck} placeholder="State" name="state" type="text" />
        </div>
        <p className="text-base font-semibold">Do you prefer any price range for the properties you work with?</p>
        <div className="flex gap-4 mt-3">
          <div className="relative">
            <input className="w-full h-14 border border-border-color rounded-lg p-3 pr-10" value={inputValues.min} onChange={handleCheck} name="min" placeholder="Min" type="text" />
            <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">USD</p>
          </div>
          <div className="relative">
            <input className="w-full h-14 border border-border-color rounded-lg p-3 pr-10" value={inputValues.max} onChange={handleCheck} name="max" placeholder="Max" type="text" />
            <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">USD</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-[50px]">
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
      </div>
      <p className="text-sm text-center my-3 text-button-color">Skip</p>
      <div className="mb-8 flex justify-center mt-3">
        <button disabled={!checkDisable()} onClick={() => router.push('/welcome')} className={`w-32 ${checkDisable() ? 'bg-button-color' : 'bg-button-disabled'} font-semibold text-white h-10 rounded-lg`}>
          Finish
        </button>
      </div>
    </>
  );
}
