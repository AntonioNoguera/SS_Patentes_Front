import PatentOptions from "./components/PatentOptions";
import MotionImplementation, { Direction } from "@components/MotionImplementation";
import "@i18n";
import { useTranslation } from "react-i18next";

function CreatePatentMenu() {

  
    const {t, i18n} = useTranslation("create_patent_section");

  return (

    <MotionImplementation direction={Direction.RIGHT}>
      <main className="h-[90vh] flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10 pt-14 gap-5 overflow-hidden">
        <h1 className="text-orange100 text-3xl font-semibold">{t("title")} Alejandro!</h1>
        <h2 className="text-xl">{t("subtitle")}</h2>

        {/* Contenedor flexible sin forzar más altura de la necesaria */}
        <div className="flex-grow flex items-center justify-center w-full -mx-3 overflow-auto">
          <PatentOptions />
        </div>
      </main>
    </MotionImplementation>
  );
}

export default CreatePatentMenu;