import { useImmer } from 'use-immer';
import { IoMdCheckmark } from 'react-icons/io';
import { useState } from 'react';
import Image from 'next/image';

import OpenEye from '/public/images/view.png';
import CloseEye from '/public/images/hide.png';
import Header from './Header';

export default function SignUpForm({ handleSignup, userDetails, setUserDetails }) {
  const [showPassword, setShowPassword] = useState(false);

  const { fullName, email, password, privacyAccepted } = userDetails;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // event handler to store value to the state
  const handleState = e => {
    const { name, value, checked } = e.target;
    setUserDetails(draft => {
      draft[name] = name === 'privacyAccepted' ? checked : value;
    });
  };

  // function to check all the fields are filled with the values
  const isSignupDisabled = () => {
    return !(fullName.trim() && emailRegex.test(email) && password && privacyAccepted);
  };

  return (
    <form className="max-w-580 w-full rounded-10 bg-white p-4 md:p-8 min-h-formHeight">
      <Header />
      <div className="mb-8">
        <label htmlFor="fullName" className="block mb-3 text-15 leading-29">
          Full name
        </label>
        <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleState} className="w-full text-15 font-normal border border-border-color rounded-lg p-4 focus:border-text-color" />
      </div>
      <div className="mb-8">
        <label htmlFor="email" className="block mb-3 text-15 leading-29">
          E-Mail
        </label>
        <input type="email" name="email" id="email" value={email} onChange={handleState} className="w-full text-15 font-normal border border-border-color rounded-lg p-4 focus:border-text-color" />
      </div>
      <div className="mb-8">
        <label htmlFor="password" className="block mb-3 text-15 leading-29">
          Password
        </label>
        <div className="relative">
          <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={handleState} className="w-full text-15 font-normal border border-border-color rounded-lg p-4 focus:border-text-color" />
          {password ? (
            !showPassword ? (
              // <IoEyeOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(true)} aria-label={'Show Password'} />
              <Image src={OpenEye} alt="Show Password" quality={100} className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(true)} />
            ) : (
              //  <IoEyeOffOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(false)} aria-label={'Hide Password'} />
              <Image src={CloseEye} alt="Hide Password" quality={100} className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(false)} />
            )
          ) : null}
        </div>
      </div>
      <div className="mt-14 mb-8">
        <div className="flex sm:items-center justify-center">
          {/* <input type="checkbox" id="privacy" name="privacyAccepted" checked={privacyAccepted} onChange={handleState} className="mr-2 accent-text-color" /> */}
          <div className="relative max-sm:mt-1 max-sm:h-18 mr-2 flex">
            <input type="checkbox" id="privacy" name="privacyAccepted" checked={privacyAccepted} onChange={handleState} className="appearance-none rounded-[5px] w-4 h-4 border border-text-color cursor-pointer" />
            <label htmlFor="privacy" className={`cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-text-color ${privacyAccepted ? 'block' : 'hidden'}`}>
              <IoMdCheckmark />
            </label>
          </div>
          <span className="text-sm mt-0.5">
            I’ve read the{' '}
            <a href="#" className="underline">
              privacy policy
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              terms of use
            </a>
          </span>
        </div>
      </div>
      <button type="button" onClick={handleSignup} className={`w-32 text-center block mx-auto text-15 font-semibold leading-none py-3 text-white rounded-md ${isSignupDisabled() ? 'bg-button-disabled cursor-not-allowed' : 'bg-button-color hover:bg-opacity-80'}`} disabled={isSignupDisabled()}>
        Sign Up
      </button>
    </form>
  );
}
