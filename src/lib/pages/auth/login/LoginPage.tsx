import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import InputField from "../../../components/InputField";
import { NavLink } from "react-router-dom";

// Componente principal
const LoginPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    userLogin: "",
    userPassword: ""
  });

  const [errors, setErrors] = useState({
    personalEmail: "",
    institutionalEmail: ""
  });

  const validateRequired = (value: string): string | null => {
    return value.trim() === "" ? "Este campo es obligatorio." : null;
  };

  const validateField = (field: string, value: string) => {
    const errorMessage = validateRequired(value);
    setErrors((prev) => ({ ...prev, [field]: errorMessage || "" }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const isFormValid = () => {
    let valid = true;
    Object.keys(formData).forEach((key) => {
      const error = validateRequired(formData[key as keyof typeof formData]);
      if (error) {
        valid = false;
        setErrors((prev) => ({ ...prev, [key]: error }));
      }
    });
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      enqueueSnackbar("Formulario enviado correctamente.", { variant: "success" });
      console.log("Datos enviados:", formData);
    } else {
      enqueueSnackbar("Por favor, completa todos los campos.", { variant: "error" });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-PtahBg flex items-center justify-center">
        <h1 className="w-full text-center">Temporal</h1>
      </div>

      <div className="w-3/5 flex items-center justify-center">
        <div className="w-full m-16 p-0">
          <h1 className="font-bold text-center text-36">Registro</h1>

          <form className="m-0 p-0" onSubmit={handleSubmit}>
            <InputField
              label="Correo personal"
              placeholder="Escribe aquí..."
              value={formData.userLogin}
              onChange={(value) => handleInputChange("personalEmail", value)}
              hasError={!!errors.personalEmail}
              errorMessage={errors.personalEmail}
            />

            <InputField
              label="Teléfono"
              placeholder="Escribe aquí..."
              value={formData.userPassword}
              onChange={(value) => handleInputChange("institutionalEmail", value)}
              hasError={!!errors.institutionalEmail}
              errorMessage={errors.institutionalEmail}
            />

            <div style={{ textDecoration: 'underline', textAlign: 'right' }}>
              Olvidé mi contraseña
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-8"
            >
              Enviar
            </button>
          </form>

          <p className="text-center mt-8">
            ¿No tienes una cuenta?{" "}
            <NavLink to="/register" className="font-bold">
              Regístrate
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 