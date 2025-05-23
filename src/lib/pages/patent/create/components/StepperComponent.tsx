// components/Stepper.tsx
import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  isStepValid?: (stepIndex: number) => boolean;
}

const StepperComponent: React.FC<StepperProps> = ({ 
  steps, 
  currentStep, 
  onStepClick,
  isStepValid 
}) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => onStepClick?.(index)}
                disabled={!onStepClick}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  transition-colors duration-200
                  ${index === currentStep 
                    ? 'bg-blue-600 text-white' 
                    : index < currentStep 
                      ? (isStepValid?.(index) ? 'bg-green-600 text-white' : 'bg-red-600 text-white')
                      : 'bg-gray-300 text-gray-600'
                  }
                  ${onStepClick ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}
                `}
              >
                {index < currentStep && isStepValid?.(index) ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </button>
              <span className="mt-2 text-xs text-center text-gray-600">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`
                flex-1 h-0.5 mx-4
                ${index < currentStep ? 'bg-green-600' : 'bg-gray-300'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepperComponent;