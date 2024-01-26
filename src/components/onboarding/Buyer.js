import { useState } from 'react';
import { useImmer } from 'use-immer';
import BuyerLastStep from './BuyerLastStep';

export default function Buyer() {
  const [userInputs, setUserInputs] = useImmer({
    sliderValue: 10,
    city: '',
    min: '',
    max: ''
  });
  const [next, setNext] = useState(false);

  const handleInput = e => {
    setUserInputs(draft => {
      draft[e.target.name] = e.target.value;
    });
  };

  function checkDisable() {
    return userInputs.sliderValue && userInputs.city && userInputs.min && userInputs.max;
  }

  return (
    <div className="max-w-580 w-full bg-white m-auto min-h-712 border-border-color rounded-xl border-solid shadow-onboard-shadow my-16 p-8">
      {next ? (
        <BuyerLastStep />
      ) : (
        <>
          <div className="pt-2">
            <h5 className="text-xl font-semibold">Where do you want to buy a house?</h5>
            <p className="text-base font-normal mt-2 mb-10 text-text-color">This will help us find the right homes for you.</p>
            <div>
              <label className="text-base font-semibold" htmlFor="City">
                City
              </label>
              <input onChange={handleInput} value={userInputs.city} className="w-full h-14 border border-border-color rounded-lg p-3 mt-3" name="city" id="City" type="text" />
            </div>
          </div>
          <div className="flex mt-9 justify-between">
            <p className="text-base font-semibold">Within a distance of</p>
            <span className="text-lg sm:text-xl">
              {userInputs.sliderValue} <small className="text-sm sm:text-15">miles</small>
            </span>
          </div>
          <div className="flex items-center my-8">
            <input type="range" min="0" max="100" name="sliderValue" value={userInputs.sliderValue} onChange={handleInput} className="input-slider" />
          </div>
          <p className="font-semibold mb-3 text-sm sm:text-15">Price Range </p>
          <div className="flex gap-4">
            <div className="w-full relative">
              <input onChange={handleInput} value={userInputs.min} className="w-full h-14 border border-border-color rounded-lg p-3 pr-10" name="min" placeholder="Min" type="text" />
              <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">USD</p>
            </div>
            <div className="w-full relative">
              <input onChange={handleInput} value={userInputs.max} className="w-full h-14 border border-border-color rounded-lg p-3 pr-10" name="max" placeholder="Max" type="text" />
              <p className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-15 text-off-color">USD</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-[100px]">
            <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
            <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
            <div className="p-1 w-4 h-4 bg-button-disabled rounded-full"></div>
          </div>
          <h4 className="text-sm text-center my-3 text-button-color">Skip</h4>
          <div className="mb-8 flex justify-center mt-3">
            <button onClick={() => setNext(true)} disabled={!checkDisable()} className={`w-32 ${checkDisable() ? 'bg-button-color' : 'bg-button-disabled'}  font-semibold text-white h-10 rounded-lg hover:bg-opacity-80`}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
