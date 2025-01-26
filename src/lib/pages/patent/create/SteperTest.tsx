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
        <h1 className="text-2xl font-bold text-center mb-6">Playground!</h1>
        <Stepper steps={steps} />

        <p className="font-poppins font-thin">Texto con font-weight: 100 (thin)</p>
        <p className="font-poppins font-light">Texto con font-weight: 300 (light)</p>
        <p className="font-poppins font-normal">Texto con font-weight: 400 (normal)</p>
        <p className="font-poppins font-medium">Texto con font-weight: 500 (medium)</p>
        <p className="font-poppins font-semibold">Texto con font-weight: 600 (semi-bold)</p>
        <p className="font-poppins font-bold">Texto con font-weight: 700 (bold)</p>
        <p className="font-poppins font-extrabold">Texto con font-weight: 800 (extra-bold)</p>
        <p className="font-poppins font-black">Texto con font-weight: 900 (black)</p>

      </div>
    </div>
  );
};

export default StepperTest;