import React, { useState } from 'react';

interface Step {
  label: string;
  content: JSX.Element;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="max-w-md mx-auto p-4"> 
      <div className="flex items-center mb-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`relative flex flex-col items-center text-center cursor-pointer ${index <= currentStep ? 'text-blue-500' : 'text-gray-400'
                }`}
              onClick={() => handleStepClick(index)} >

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${index <= currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                  }`}
              >
                {index + 1}
              </div>
 
              <span
                className="absolute -left-4 -right-4 mt-10 text-sm z-2 text-center"
              >
                {step.label}
              </span>
            </div>
 
            {index < steps.length - 1 && (
              <div
                className={`flex-grow h-1 ${index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                style={{
                  alignSelf: 'center',
                }}
              />
            )}


          </React.Fragment>
        ))}
      </div>
 
      <div className="border p-4 rounded-lg shadow-md mb-6">
        {steps[currentStep].content}
      </div>
 
      <div className="flex justify-between">
        <button
          className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Atrás
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Siguiente
        </button>
      </div>

    </div>
  );
};

export default Stepper;