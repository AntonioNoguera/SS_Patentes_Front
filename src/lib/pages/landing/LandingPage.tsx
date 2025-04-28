import React from "react";
import { NavLink } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import LandingNavbar from "./components/LandingNavbar";


import { useTranslation } from "react-i18next";
import "@i18n";

function LandingPage() {

  const { t, i18n } = useTranslation("landing_page");

  return (
    <MotionImplementaton>
      <div className="flex flex-col min-h-screen bg-gray">
        <LandingNavbar />

        <main className="relative flex-1 flex flex-col">
 

          {/* Capa de imágenes */}
          <div className="absolute inset-0 z-5 bg-aqua26 pointer-events-none">
            {/* Tus imágenes aquí */}
            <div className="absolute -bottom-0 left-10 items-end flex gap-11 ">

              <img
                src="https://humanidades.com/wp-content/uploads/2018/10/escritura-1-e1581822648427.jpg"
                alt="Decoración"
                className="rounded-t-2xl w-1/5 2xl:w-1/4 object-cover"
                style={{
                  height: '80vh',
                }}
              />

              <img
                src="https://img.freepik.com/vector-gratis/hombre-negocios-tiene-idea_1133-350.jpg?semt=ais_hybrid&w=600"
                alt="Decoración"
                className="rounded-t-2xl w-1/5 2xl:w-1/4"
                style={{
                  height: '57vh',
                }}
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/CervantinaInside002.jpg"
                alt="Decoración"
                className="rounded-t-2xl w-1/5 2xl:w-1/4"
                style={{
                  height: '35vh',
                }}
              />
            </div>
          </div>

          {/* Contenido principal */}
          <div className="relative flex-1 flex flex-col items-end text-end justify-center z-10 px-12 gap-3">

            <h1 className="text-white text-body1 font-semibold text-shadow-sm">
              {t("app_name")}
            </h1>

            <h2 className="text-white text-h1 font-bold text-shadow-sm">
              {
                t("app_title").split('\n').map(
                  (line, index) => (
                    <React.Fragment key={`line-${index}`}>
                      {line}
                      <br />
                    </React.Fragment>
                  )
                )
              }
            </h2>

            <p className="text-body1 font-thin text-blackSecondary">
              {
                t("app_subtitle").split('\n').map(
                  (line, index) => (
                    <React.Fragment key={`line-${index}`}>
                      {line}
                      <br />
                    </React.Fragment>
                  )
                )
              }
            </p>

            <NavLink
              to="/login"
              className="px-8 py-4 mr-10 bg-white rounded-full shadow-std hover:scale-105 text-orange100 font-semibold text-sm transition-transform duration-300 z-30"
            >
              {t("action_start")}
            </NavLink>

          </div>
        </main>


      </div>
    </MotionImplementaton>
  );
}

export default LandingPage;