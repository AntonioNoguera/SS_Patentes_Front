import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import InputField from "../../../components/InputField";
import { NavLink } from "react-router-dom";

// Componente principal
const RegisterPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    personalEmail: "",
    institutionalEmail: "",
    phone: "",
    mobile: "",
    career: "",
    enrollment: "",
    employeeNumber: "",
    situation: "",
  });

  const [errors, setErrors] = useState({
    personalEmail: "",
    institutionalEmail: "",
    phone: "",
    mobile: "",
    career: "",
    enrollment: "",
    employeeNumber: "",
    situation: "",
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
          <h1 className="font-bold text-center mb-6 text-36">Registro</h1>

          <form className="m-0 p-0" onSubmit={handleSubmit}>
            {/* Fila 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Correo personal"
                placeholder="Escribe aquí..."
                value={formData.personalEmail}
                onChange={(value) => handleInputChange("personalEmail", value)}
                hasError={!!errors.personalEmail}
                errorMessage={errors.personalEmail}
              />
              <InputField
                label="Correo institucional"
                placeholder="Escribe aquí..."
                value={formData.institutionalEmail}
                onChange={(value) => handleInputChange("institutionalEmail", value)}
                hasError={!!errors.institutionalEmail}
                errorMessage={errors.institutionalEmail}
              />
            </div>

            {/* Fila 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Teléfono"
                placeholder="Escribe aquí..."
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value)}
                hasError={!!errors.phone}
                errorMessage={errors.phone}
              />
              <InputField
                label="Celular"
                placeholder="Escribe aquí..."
                value={formData.mobile}
                onChange={(value) => handleInputChange("mobile", value)}
                hasError={!!errors.mobile}
                errorMessage={errors.mobile}
              />
            </div>

            {/* Fila 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Carrera"
                placeholder="Escribe aquí..."
                value={formData.career}
                onChange={(value) => handleInputChange("career", value)}
                hasError={!!errors.career}
                errorMessage={errors.career}
              />
              <InputField
                label="Matrícula"
                placeholder="Escribe aquí..."
                value={formData.enrollment}
                onChange={(value) => handleInputChange("enrollment", value)}
                hasError={!!errors.enrollment}
                errorMessage={errors.enrollment}
              />
            </div>

            {/* Fila 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Núm. de Empleado"
                placeholder="Escribe aquí..."
                value={formData.employeeNumber}
                onChange={(value) => handleInputChange("employeeNumber", value)}
                hasError={!!errors.employeeNumber}
                errorMessage={errors.employeeNumber}
              />
              <InputField
                label="Situación"
                placeholder="Escribe aquí..."
                value={formData.situation}
                onChange={(value) => handleInputChange("situation", value)}
                hasError={!!errors.situation}
                errorMessage={errors.situation}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
            >
              Enviar
            </button>
          </form>

          <p className="text-center mt-8">
            ¿Ya tienes una cuenta?{" "}
            <NavLink to="/" className="font-bold">
              Inicia Sesión
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};


export default RegisterPage;
