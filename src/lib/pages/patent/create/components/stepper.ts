// types/stepper.ts
export interface StepData {
  [key: string]: any;
}

export interface StepConfig {
  id: string;
  title: string;
  component: React.ComponentType<StepProps>;
  isValid?: (data: StepData) => boolean;
}

export interface StepProps {
  data: StepData;
  onDataChange: (data: StepData) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}