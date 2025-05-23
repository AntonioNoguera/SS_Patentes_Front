// CreatePatent.tsx
import MotionImplementaton, { Direction } from "@components/MotionImplementation";
import StepContainer from "./components/StepContainer";
import { StepConfig, StepData } from "./components/stepper";
import PatentInfoStep from "./components/Steps/PatentInfoStep";
import InventorInfoStep from "./components/Steps/InventorInfoStep";
// import StepContainer from "../components/StepContainer";
// import PatentInfoStep from "../steps/PatentInfoStep";
// import InventorInfoStep from "../steps/InventorInfoStep";
// import DocumentsStep from "../steps/DocumentsStep";
// import ReviewStep from "../steps/ReviewStep";
// import { StepConfig, StepData } from "../types/stepper";

// Definir la configuración de los pasos
const patentSteps: StepConfig[] = [
  {
    id: 'patent-info',
    title: 'Información de Patente',
    component: PatentInfoStep,
    isValid: (data: StepData) => {
      return !!(data.title && data.description && data.category);
    }
  },
  {
    id: 'inventor-info',
    title: 'Datos del Inventor',
    component: InventorInfoStep,
    isValid: (data: StepData) => {
      return !!(data.firstName && data.lastName && data.email);
    }
  }
];

function CreatePatentFlow() {
  const handleComplete = (allData: Record<string, StepData>) => {
    console.log('Datos completos del formulario:', allData);
    // Aquí puedes enviar los datos al backend
    // api.createPatent(allData);
  };

  return (
    <MotionImplementaton direction={Direction.RIGHT}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900">Crear Patente</h1>
              <p className="mt-2 text-gray-600">
                Complete los siguientes pasos para registrar su patente
              </p>
            </div>
            
            <div className="p-6">
              <StepContainer 
                steps={patentSteps} 
                onComplete={handleComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </MotionImplementaton>
  );
}

export default CreatePatentFlow;
 