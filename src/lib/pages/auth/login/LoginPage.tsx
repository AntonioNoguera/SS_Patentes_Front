import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import InputField from "@components/InputField";
import { NavLink } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import { UserService } from "@services/User/UserService";
 
const LoginPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    userLogin: "",
    userPassword: ""
  });

  const [errors, setErrors] = useState({
    userLogin: "",
    userPassword: ""
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validamos que los campos no estén vacíos
    if (!formData.userLogin || !formData.userPassword) {
      enqueueSnackbar("Por favor, completa todos los campos.", { variant: "error" });
      return;
    }

    try {
      const response = await UserService.login({
        username: formData.userLogin,
        password: formData.userPassword,
      });

      // Guardamos el token en localStorage
      localStorage.setItem("token", response.token); 

      enqueueSnackbar("Inicio de sesión exitoso.", { variant: "success" });

      // Redirigir a la página principal o dashboard
      //navigate("/dashboard");
    } catch (error) {
      console.error("Error en la autenticación:", error);
      enqueueSnackbar("Credenciales incorrectas.", { variant: "error" });
    }
  };

  return (
    <MotionImplementaton>
    <div className="flex h-screen">
      <div className="w-2/5 bg-PtahBg flex items-center justify-center">
        <h1 className="w-full text-center">Temporal</h1>
      </div>

      <div className="w-3/5 flex items-center justify-center">
        <div className="w-full m-16 p-0">
          <h1 className="font-bold text-center text-36">Inicio de Sesión</h1>

          <form className="m-0 p-0" onSubmit={handleSubmit}>
            <InputField
              label="Correo personal"
              placeholder="Escribe aquí..."
              value={formData.userLogin}
              onChange={(value) => handleInputChange("userLogin", value)}
              hasError={!!errors.userLogin}
              errorMessage={errors.userLogin}
            />

            <InputField
              label="Teléfono"
              placeholder="Escribe aquí..."
              value={formData.userPassword}
              onChange={(value) => handleInputChange("userPassword", value)}
              hasError={!!errors.userPassword}
              errorMessage={errors.userPassword}
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

          <p className="text-center mt-8 font-regular">
            ¿No tienes una cuenta?{" "}
            <NavLink to="/register" className="font-semibold">
              Regístrate
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </MotionImplementaton>
  );
};

export default LoginPage; 