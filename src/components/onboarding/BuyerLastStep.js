import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function BuyerLastStep() {
  const [currentIndex, setCurrentIndex] = useImmer([
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    }
  ]);
  const [userInputs, setUserInputs] = useImmer({
    buttonValue: [],
    min: '',
    max: ''
  });
  const router = useRouter();
  const buttons = [
    { name: 'All styles', id: 1, value: '*' },
    { name: 'Style 2', id: 2, value: 'Style 2' },
    { name: 'Style 3', id: 3, value: 'Style 3' },
    { name: 'Style 4', id: 4, value: 'Style 4' },
    { name: 'Style 5', id: 5, value: 'Style 5' },
    { name: 'Style 6', id: 6, value: 'Style 6' },
    { name: 'Style 7', id: 7, value: 'Style 7' },
    { name: 'Style 8', id: 8, value: 'Style 8' },
    { name: 'Style 9', id: 9, value: 'Style 9' },
    { name: 'Style 10', id: 10, value: 'Style 10' }
  ];

  function handleClick(i, id, value) {
    setCurrentIndex(draft => {
      if (draft[0].id === id) {
        draft[i].id = 0;
        return;
      } else if (draft[i].id === id) {
        return;
      } else {
        draft[i].id = id;
        setUserInputs(draft => {
          draft['buttonValue'].push(value);
        });
      }
    });
  }

  function handleChange(e) {
    setUserInputs(draft => {
      // Check if the input matches the pattern (only numbers)
      if (/^\d*$/.test(e.target.value)) {
        draft[e.target.name] = e.target.value;
      }
    });
  }

  function checkDisable() {
    return userInputs.buttonValue.length > 0 && userInputs.min && userInputs.max;
  }

  return (
    <>
      <div className=" flex flex-col">
        <h2 className="text-xl font-semibold">What kind of home are you looking for?</h2>
        <p className="text-off-color mt-2.5 mb-12">This will help us find the right homes for you.</p>
        <p className="text-base font-semibold">Choose your preferred style(s)</p>
        <div className="flex flex-wrap mb-8 gap-2 mt-4">
          {buttons.map((button, i) => (
            <div key={button.id} onClick={() => handleClick(i, button.id, button.value)} className={`cursor-pointer h-9 py-2 px-6 text-sm sm:text-15 border text-center rounded-full ${i + 1 === currentIndex[i].id ? 'bg-button-color' : ''} border-button-color`}>
              <p className={i + 1 === currentIndex[i].id ? 'text-white' : ''}>{button.name}</p>
            </div>
          ))}
        </div>

        <p className="text-base font-semibold">What size are you looking for?</p>
        <div className="flex gap-4 mt-3">
          <div className="relative">
            <input onChange={handleChange} name="min" value={userInputs.min} className="w-full h-14 border border-border-color rounded-lg p-3" placeholder="Min " type="text" />
            <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">ft²</p>
          </div>
          <div className="relative">
            <input onChange={handleChange} value={userInputs.max} name="max" className="w-full h-14 border border-border-color rounded-lg p-3" placeholder="Max " type="text" />
            <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">ft²</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-32">
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
      </div>
      <h4 className="text-sm text-center my-3 text-button-color">Skip</h4>
      <div className="mb-8 flex justify-center mt-3">
        <button onClick={() => router.push('/welcome')} disabled={!checkDisable()} className={`w-32 ${checkDisable() ? 'bg-button-color' : 'bg-button-disabled'} font-semibold text-white h-10 rounded-lg`}>
          Finish
        </button>
      </div>
    </>
  );
}
