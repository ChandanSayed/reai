'use client';
import Step1 from '@/components/onboarding/Step1';
import Step2 from '@/components/onboarding/Step2';
import { useState } from 'react';

export default function page() {
  const [step, setStep] = useState('step1');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-onboard-bg px-4">
      {step === 'step1' && <Step1 setStep={setStep} />}
      {step === 'step2' && <Step2 setStep={setStep} />}
    </div>
  );
}
