import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { NavLink } from "react-router-dom";
import InputField from "@components/InputField";
import MotionImplementaton from "@components/MotionImplementation";
import { UserService } from "@services/User/UserService";
import { AnimatePresence, motion } from "framer-motion";

import "@i18n";
import { useTranslation } from "react-i18next";

type FormData = {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  curp: string;
  employeeNumber: string;
  rollNumber: number;
  birthDate: string;
  birthCity: string;
  birthState: string;
  major: string;
  institutionalEmail: string;
  personalEmail: string;
  phoneNumber: string;
  gender: number;
  maritalSituation: number;
  academicGrade: string;
  digitalSignature: string;
  password: string;
  passwordConfirm: string;
};

const initialFormData: FormData = {
  firstName: "",
  secondName: "",
  firstLastName: "",
  secondLastName: "",
  curp: "",
  employeeNumber: "",
  rollNumber: 0,
  birthDate: "",
  birthCity: "",
  birthState: "",
  major: "",
  institutionalEmail: "",
  personalEmail: "",
  phoneNumber: "",
  gender: 0,
  maritalSituation: 0,
  academicGrade: "",
  digitalSignature: "",
  password: "",
  passwordConfirm: "",
};

type FormField = keyof FormData;


const steps: FormField[][] = [
  ["firstName", "secondName", "firstLastName", "secondLastName"],
  ["curp", "employeeNumber", "birthDate", "birthCity", "birthState"],
  ["major", "institutionalEmail", "personalEmail", "phoneNumber"],
  ["password", "passwordConfirm"],
];

const RegisterPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<FormField, string>>(
    Object.fromEntries(Object.keys(initialFormData).map((key) => [key, ""])) as Record<FormField, string>
  );
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const validateRequired = (value: string | number): string | null => {
    return value === "" || value === 0 ? "Este campo es obligatorio." : null;
  };

  const handleInputChange = (field: FormField, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateRequired(value) || "" }));
  };

  const validateStep = (): boolean => {
    let valid = true;
    const newErrors = { ...errors };
    for (const field of steps[currentStep]) {
      const error = validateRequired(formData[field]);
      if (error) {
        valid = false;
        newErrors[field] = error;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (!validateStep()) {
      enqueueSnackbar("Por favor, completa todos los campos del paso actual.", { variant: "error" });
      return;
    }
    setDirection("forward");
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection("backward");
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    // if (!validateStep()) {
    //   enqueueSnackbar("Por favor, completa todos los campos del último paso.", { variant: "error" });
    //   return;
    // }

    
    enqueueSnackbar("Registro exitoso.", { variant: "success" });

    // try {
    //   const response = await UserService.register(formData);
    //   localStorage.setItem("token", response.token);
    //   enqueueSnackbar("Registro exitoso.", { variant: "success" });
    //   //navigate("/dashboard");
    // } catch (error) {
    //   console.error("Error en el registro:", error);
    //   enqueueSnackbar("Error al registrar usuario.", { variant: "error" });
    // }
  };

  // Definir las variantes de animación basadas en la dirección
  const variants = {
    enter: (direction: string) => ({
      x: direction === "forward" ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      x: direction === "forward" ? -100 : 100,
      opacity: 0
    })
  };


  const { t, i18n } = useTranslation("register");

  return (

    <MotionImplementaton>
      <div className="flex h-screen overflow-x-hidden">
        {/* Imagen lateral */}
        <div className="w-2/5 bg-[url(./src/assets/writingBgImage.jpg)] bg-cover bg-right flex items-center justify-center -z-10">
          <div className="w-2/5 h-full bg-aqua100 absolute opacity-40 z-0"></div>
          <img className="w-3/6 z-10" src="./src/assets/MKALogoWritting.png" alt="Logo MKA Writting" />
        </div>

        {/* Formulario */}
        <div className="w-3/5 flex items-center justify-center">
          <div className="w-full m-16 p-0 overflow-hidden">
            <h1 className="font-bold text-center mb-6 text-36">Registro</h1>

            <form className="m-0 p-0">
              {/* Contenedor con altura fija para mantener la estructura */}
              <div className="relative w-full overflow-hidden" style={{ minHeight: "240px" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y02 w-full"
                  >
                    {steps[currentStep].map((field) => (
                      <InputField
                        key={field}
                        label={t(field)}
                        placeholder={`Escribe ${t(field).toLowerCase()} aquí...`}
                        value={formData[field]}
                        onChange={(value) => handleInputChange(field, value)}
                        hasError={!!errors[field]}
                        errorMessage={errors[field]}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
 
              <div className="flex justify-between mt-8 relative z-10">
                <button
                  type="button"
                  className={`btn-primary !bg-activeBtn !px-20 transition-all duration-300 ${currentStep === 0 ? "invisible" : "visible"}`}
                  onClick={handleBack}
                >
                  {t("previousAction")}
                </button>

                {currentStep < steps.length -1 ? (
                  <button
                    type="button"
                    className="btn-primary !px-20"
                    onClick={handleNext}
                  >
                    {t("incomingAction")}
                  </button>
                ) : (
                  <button type="button" onClick = {handleSubmit} className="btn-primary !px-20">
                    {t("loginAction")}
                  </button>
                )}
              </div>
            </form>

            <p className="text-center mt-8">
              {t("alreadyUser") + " "}
              <NavLink to="/login" className="font-bold text-purple100">
                {t("alreadyUserAction")}
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </MotionImplementaton>
  );
};

export default RegisterPage;