import PatentOptions from "./components/PatentOptions";
import MotionImplementaton from "@components/MotionImplementation";

function CreatePatentMenu() {
  return (
    <MotionImplementaton> 
        <main className="h-[93vh] flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10 py-14 gap-5 overflow-hidden">
          <h1 className="text-orange100 text-3xl font-semibold">¡Bienvenido, Alejandro!</h1>
          <h2 className="text-xl">¿Qué vamos a crear hoy?</h2>
          
          {/* Contenedor flexible sin forzar más altura de la necesaria */}
          <div className="flex-grow flex items-center justify-center w-full -mx-3 overflow-auto">
            <PatentOptions />
          </div>
        </main>
    </MotionImplementaton>
  );
}

export default CreatePatentMenu;