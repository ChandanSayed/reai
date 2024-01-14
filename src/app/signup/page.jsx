'use client';

import { useImmer } from 'use-immer';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoMdCheckmark } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useImmer({
    fullName: '',
    email: '',
    password: '',
    privacyAccepted: false
  });

  const { fullName, email, password, privacyAccepted } = userDetails;
  // Handle form submit
  const handleSignup = () => {
    console.log('Signing up...');
  };

  // event handler to store value to the state
  const handleState = e => {
    const { name, value, checked } = e.target;
    setUserDetails(draft => {
      draft[name] = name === 'privacyAccepted' ? checked : value;
    });
  };

  // function to check all the fields are filled with the values
  const isSignupDisabled = () => {
    return !(fullName.trim() && email.trim() && password && privacyAccepted);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-color">
      <form className="max-w-580 w-full rounded-10 bg-white p-4 md:p-8">
        <div className="flex justify-between items-center text-text-color mb-12">
          <h2 className="text-30 leading-39">Sign Up</h2>
          <IoCloseOutline className="cursor-pointer text-2xl" />
        </div>
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
            {password ? !showPassword ? <IoEyeOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(true)} aria-label={'Show Password'} /> : <IoEyeOffOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(false)} aria-label={'Hide Password'} /> : null}
          </div>
        </div>
        <div className="mt-14 mb-8">
          <div className="flex items-center justify-center">
            {/* <input type="checkbox" id="privacy" name="privacyAccepted" checked={privacyAccepted} onChange={handleState} className="mr-2 accent-text-color" /> */}
            <div className="relative mr-2 flex">
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
    </div>
  );
};

export default Signup;
