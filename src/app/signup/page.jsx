'use client';
import Confirmation from '@/components/signup/Confirmation';
import SignUpForm from '@/components/signup/SignUpForm';
import { useState } from 'react';

const Signup = () => {
  const [confirmation, setConfirmation] = useState(false);
  // Handle form submit
  const handleSignup = () => {
    setConfirmation(prev => !prev);
  };
  return <div className="flex flex-col items-center justify-center min-h-screen bg-bg-color px-4">{!confirmation ? <SignUpForm handleSignup={handleSignup} /> : <Confirmation />}</div>;
};

export default Signup;
