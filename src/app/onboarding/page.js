'use client';
import Agent from '@/components/onboarding/Agent';
import Buyer from '@/components/onboarding/Buyer';
import Step1 from '@/components/onboarding/Step1';
import Step2 from '@/components/onboarding/Step2';
import Step3 from '@/components/onboarding/Step3';
import { useState } from 'react';

export default function page() {
  const [step, setStep] = useState('step1');
  const [userType, setUserType] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-onboard-bg px-4">
      {step === 'step1' && <Step1 setStep={setStep} userType={userType} setUserType={setUserType} />}
      {step === 'step2' && userType === 'homeowner' && <Step2 setStep={setStep} />}
      {step === 'step2' && userType === 'agent' && <Agent />}
      {step === 'step2' && userType === 'buyer' && <Buyer />}
      {step === 'step3' && <Step3 setStep={setStep} />}
    </div>
  );
}
