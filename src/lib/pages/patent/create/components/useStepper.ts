import { useState, useCallback } from 'react';
import { StepConfig, StepData } from './stepper'; 

export const useStepper = (steps: StepConfig[]) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsData, setStepsData] = useState<Record<string, StepData>>({});

  const updateStepData = useCallback((stepId: string, data: StepData) => {
    setStepsData(prev => ({
      ...prev,
      [stepId]: { ...prev[stepId], ...data }
    }));
  }, []);

  const goToStep = useCallback((stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
    }
  }, [steps.length]);

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, steps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const canGoNext = currentStep < steps.length - 1;
  const canGoPrev = currentStep > 0;

  const isStepValid = useCallback((stepIndex: number) => {
    const step = steps[stepIndex];
    if (!step.isValid) return true;
    
    const stepData = stepsData[step.id] || {};
    return step.isValid(stepData);
  }, [steps, stepsData]);

  return {
    currentStep,
    stepsData,
    updateStepData,
    goToStep,
    nextStep,
    prevStep,
    canGoNext,
    canGoPrev,
    isStepValid,
    totalSteps: steps.length
  };
};
