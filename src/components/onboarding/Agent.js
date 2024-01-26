import { useState } from 'react';
import { useImmer } from 'use-immer';
import AgentLastStep from './AgentLastStep';

export default function Agent() {
  const [step, setStep] = useState('');
  const [userDetails, setUserDetails] = useImmer([
    {
      id: '',
      mls: ''
    }
  ]);

  // event handler to store value to the state
  const handleState = e => {
    setUserDetails(draft => {
      draft[e.target.id][e.target.name] = e.target.value;
    });
  };

  // function to check all the fields are filled with the values
  const nextStepDisabled = () => {
    return !userDetails.every(item => Boolean(item.id && item.mls));
  };

  function addMoreFields() {
    setUserDetails(prev => {
      prev.push({ id: '', mls: '' });
    });
  }

  return (
    <div className="max-w-580 w-full flex flex-col bg-white m-auto my-16 p-4 sm:p-8 min-h-712 border-text-color rounded-xl border-solid shadow-onboard-shadow">
      {step === 'step3' ? (
        <AgentLastStep />
      ) : (
        <>
          <div className="pt-2">
            <h5 className="text-xl font-medium">What’s your agent ID and MLS?</h5>
            <p className="text-base font-normal mt-3 mb-11 text-off-color">Please add all your IDs and MLS if you have multiple.</p>
          </div>
          <div>
            {userDetails.map((li, i) => {
              return (
                <div className="flex gap-8 mt-10" key={i}>
                  <div className="w-24">
                    <label htmlFor="id" className="block mb-3 font-semibold">
                      ID
                    </label>
                    <input id={i} value={li.id} className="border border-border-color px-4 w-full h-14 rounded-lg" type="text" onChange={handleState} name="id" required />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="mls" className="block mb-3 font-semibold">
                      MLS
                    </label>
                    <input id={i} value={li.mls} className="border border-border-color w-full px-4 h-14 rounded-lg" type="text" onChange={handleState} name="mls" required />
                  </div>
                </div>
              );
            })}
            <button className="text-button-color block mx-auto mt-8 text-sm sm:text-15" onClick={addMoreFields}>
              + Add More
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-auto sm:mt-auto">
            <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
            <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
            <div className="p-1 w-4 h-4 bg-button-disabled rounded-full"></div>
          </div>
          <p className="text-sm text-center my-3 text-button-color">Skip</p>
          <div className="w-full mb-8">
            <button disabled={nextStepDisabled()} onClick={() => setStep('step3')} className={`w-32 block mx-auto ${nextStepDisabled() ? 'bg-button-disabled' : 'bg-button-color'} font-semibold text-white h-10 rounded-lg`}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
