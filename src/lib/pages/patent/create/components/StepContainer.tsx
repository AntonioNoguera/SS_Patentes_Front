// components/StepContainer.tsx
import React from 'react';
import { StepConfig, StepData } from './stepper';
import { useStepper } from './useStepper'; 
import StepperComponent from './StepperComponent';
  

// import { StepConfig, StepData } from '../types/stepper';
// import { useStepper } from '../hooks/useStepper';
// import Stepper from './Stepper';

interface StepContainerProps {
  steps: StepConfig[];
  onComplete?: (allData: Record<string, StepData>) => void;
}

const StepContainer: React.FC<StepContainerProps> = ({ steps, onComplete }) => {
  const {
    currentStep,
    stepsData,
    updateStepData,
    goToStep,
    nextStep,
    prevStep,
    canGoNext,
    canGoPrev,
    isStepValid
  } = useStepper(steps);

  const currentStepConfig = steps[currentStep];
  const CurrentStepComponent = currentStepConfig.component;

  const handleStepClick = (stepIndex: number) => {
    // Solo permitir ir a pasos anteriores o al paso actual
    if (stepIndex <= currentStep) {
      goToStep(stepIndex);
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete(stepsData);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <StepperComponent
        steps={steps.map(step => step.title)}
        currentStep={currentStep}
        onStepClick={handleStepClick}
        isStepValid={isStepValid}
      />
      
      <div className="mt-8">
        <CurrentStepComponent
          data={stepsData[currentStepConfig.id] || {}}
          onDataChange={(data) => updateStepData(currentStepConfig.id, data)}
          onNext={nextStep}
          onPrev={prevStep}
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
        />
      </div>

      {/* Botones de navegación opcionales */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={!canGoPrev}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
        >
          Anterior
        </button>
        
        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleComplete}
            disabled={!isStepValid(currentStep)}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700"
          >
            Completar
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!canGoNext || !isStepValid(currentStep)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default StepContainer;