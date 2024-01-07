'use client';

import { useState } from 'react';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signing up...');
  };

  const isSignupDisabled = () => {
    return !(fullName && email && password && privacyAccepted);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-color">
      <form className="max-w-580 w-full rounded-10 bg-white p-4 md:p-8">
        <h2 className="text-30 leading-39 mb-12">Sign Up</h2>
        <div className="mb-8">
          <label htmlFor="fullName" className="block mb-3 text-15 leading-29">
            Full name
          </label>
          <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full text-15 font-normal border border-border-color rounded-lg p-4" />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="block mb-3 text-15 leading-29">
            E-Mail
          </label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full text-15 font-normal border border-border-color rounded-lg p-4" />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-3 text-15 leading-29">
            Password
          </label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full text-15 font-normal border border-border-color rounded-lg p-4" />
        </div>
        <div className="mt-14 mb-8">
          <div className="flex items-center justify-center">
            <input type="checkbox" id="privacy" checked={privacyAccepted} onChange={e => setPrivacyAccepted(e.target.checked)} className="mr-2" />
            <span className="text-sm">
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
