'use client';
import { useImmer } from 'use-immer';

export default function Step2({ setStep }) {
  const [userDetails, setUserDetails] = useImmer({
    address: '',
    city: '',
    zip: '',
    address2: ''
  });

  const { address, city, zip, address2 } = userDetails;

  // event handler to store value to the state
  const handleState = e => {
    const { name, value } = e.target;
    setUserDetails(draft => {
      draft[name] = value;
    });
  };

  // function to check all the fields are filled with the values
  const nextStepDisabled = () => {
    return !(address.trim() && city.trim() && zip.trim() && address2);
  };

  return (
    <section className="max-w-580 w-full bg-white m-auto my-16 p-8 h-712 border-text-color rounded-xl border-solid shadow-onboard-shadow">
      <div className="pt-2">
        <h5 className="text-xl font-medium">What’s the address of your home?</h5>
        <p className="text-base font-normal mt-3 mb-14">This will help us in case you want to sell your home</p>
      </div>
      <div>
        <div>
          <label htmlFor="address" className="mb-3 block font-semibold">
            Address
          </label>
          <input id="address" className="border border-border-color w-full px-4 h-14 rounded-lg" type="text" onChange={handleState} name="address" required />
        </div>
        <div className="flex gap-8 mt-10">
          <div className="w-24">
            <label htmlFor="zip" className="block mb-3 font-semibold">
              ZIP
            </label>
            <input id="zip" className="border border-border-color px-4 w-full h-14 rounded-lg" type="text" onChange={handleState} name="zip" required />
          </div>
          <div className="flex-1">
            <label htmlFor="city" className="block mb-3 font-semibold">
              City
            </label>
            <input id="city" className="border border-border-color w-full px-4 h-14 rounded-lg" type="text" onChange={handleState} name="city" required />
          </div>
        </div>
        <div className="mt-10">
          <label htmlFor="address2" className="block mb-3 font-semibold">
            Address
          </label>
          <input id="address2" className="border border-border-color w-full px-4 h-14 rounded-lg" type="text" onChange={handleState} name="address2" required />
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-16">
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-color rounded-full"></div>
        <div className="p-1 w-4 h-4 bg-button-disabled rounded-full"></div>
      </div>
      <h4 className="text-sm text-center my-3 text-button-color">Skip</h4>
      <div className="w-full mb-8">
        <button disabled={nextStepDisabled()} onClick={() => setStep('step3')} className={`w-32 block mx-auto ${nextStepDisabled() ? 'bg-button-disabled' : 'bg-button-color'} font-semibold text-white h-10 rounded-lg`}>
          Next
        </button>
      </div>
    </section>
  );
}
