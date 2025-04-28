import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import InputField from "@components/InputField";
import { NavLink, useNavigate } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import { UserService } from "@services/User/UserService";

const LoginPage: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

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
            navigate("/dashboard");
        } catch (error) {
            console.error("Error en la autenticación:", error);
            enqueueSnackbar("Credenciales incorrectas.", { variant: "error" });
        }
    };

    return (
        <MotionImplementaton>
            <div className="flex h-screen">
                <div className="w-1/2 bg-[url(./src/assets/writingBgImage.jpg)] bg-cover bg-right flex items-center justify-center -z-10">
                    <div className="w-1/2 h-full bg-aqua100 absolute opacity-50 z-0"></div>
                    <img className="w-3/6 z-10" src="./src/assets/MKALogoWritting.png" alt="Logo MKA Writting" />
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-full m-16 p-0">
                        <h1 className="font-bold text-center text-36 mb-10">Inicio de Sesión</h1>

                        <form className="m-0 p-0 flex flex-col" onSubmit={handleSubmit}>
                            <InputField
                                label="Correo personal"
                                placeholder="Escribe aquí..."
                                value={formData.userLogin}
                                onChange={(value) => handleInputChange("userLogin", value)}
                                hasError={!!errors.userLogin}
                                errorMessage={errors.userLogin}
                            />

                            <InputField
                                label="Contraseña"
                                placeholder="Escribe aquí..."
                                value={formData.userPassword}
                                onChange={(value) => handleInputChange("userPassword", value)}
                                hasError={!!errors.userPassword}
                                errorMessage={errors.userPassword}
                            />

                            <div className="text-gray-500 underline text-right">
                                Olvidé mi contraseña
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-1/3 mx-auto mt-8"
                            >
                                Enviar
                            </button>
                        </form>

                        <p className="text-center mt-8 font-regular text-gray-500">
                            ¿No tienes una cuenta?{" "}
                            <NavLink to="/register" className="font-semibold text-purple100">
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