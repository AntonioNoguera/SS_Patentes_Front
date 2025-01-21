import React from 'react';
import Stepper from './../../../components/Stepper';


function StepperTest() {
  // Define los pasos y el contenido para cada uno
  const steps = [
    { label: 'Paso 1', content: <div>Este es el contenido del Paso 1</div> },
    { label: 'Paso 2', content: <div>Este es el contenido del Paso 2</div> },
    { label: 'Paso 3', content: <div>Este es el contenido del Paso 3</div> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Ejemplo de Stepper</h1>
        <Stepper steps={steps} />
      </div>
    </div>
  );
};

export default StepperTest;