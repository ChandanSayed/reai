'use client';
import Confirmation from '@/components/signup/Confirmation';
import SignUpForm from '@/components/signup/SignUpForm';
import { useState } from 'react';
import { useImmer } from 'use-immer';

const Signup = () => {
  const [confirmation, setConfirmation] = useState(false);
  const [userDetails, setUserDetails] = useImmer({
    fullName: '',
    email: '',
    password: '',
    privacyAccepted: false
  });
  // Handle form submit
  const handleSignup = () => {
    setConfirmation(prev => !prev);
  };
  return <div className="flex flex-col items-center justify-center min-h-screen bg-bg-color px-4">{!confirmation ? <SignUpForm handleSignup={handleSignup} userDetails={userDetails} setUserDetails={setUserDetails} /> : <Confirmation userDetails={userDetails} />}</div>;
};

export default Signup;
