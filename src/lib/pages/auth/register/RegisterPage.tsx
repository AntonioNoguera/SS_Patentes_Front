import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { NavLink } from "react-router-dom";
import InputField from "@components/InputField";
import MotionImplementaton from "@components/MotionImplementation";
import { UserService } from "@services/User/UserService";

const RegisterPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState(
    Object.fromEntries(Object.keys(formData).map((key) => [key, ""]))
  );

  const validateRequired = (value: string | number): string | null => {
    return value === "" || value === 0 ? "Este campo es obligatorio." : null;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateRequired(value) || "" }));
  };

  const isFormValid = () => {
    let valid = true;
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateRequired(formData[key as keyof typeof formData]);
      if (error) {
        valid = false;
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      enqueueSnackbar("Por favor, completa todos los campos.", { variant: "error" });
      return;
    }

    try {
      const response = await UserService.register(formData);
      localStorage.setItem("token", response.token);
      enqueueSnackbar("Registro exitoso.", { variant: "success" });
      // Redirigir a la página principal
      // navigate("/dashboard");
    } catch (error) {
      console.error("Error en el registro:", error);
      enqueueSnackbar("Error al registrar usuario.", { variant: "error" });
    }
  };


  return (
    <MotionImplementaton>
      <div className="flex h-screen">
        <div className="w-2/5 bg-PtahBg flex items-center justify-center">
          <h1 className="w-full text-center">Registro</h1>
        </div>

        <div className="w-3/5 flex items-center justify-center">
          <div className="w-full m-16 p-0">
            <h1 className="font-bold text-center mb-6 text-36">Registro</h1>

            <form className="m-0 p-0" onSubmit={handleSubmit}>
              {/* Primera fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Nombre(s)" placeholder="Escribe aquí..." value={formData.firstName} onChange={(value) => handleInputChange("firstName", value)} hasError={!!errors.firstName} errorMessage={errors.firstName} />
                <InputField label="Segundo Nombre" placeholder="Escribe aquí..." value={formData.secondName} onChange={(value) => handleInputChange("secondName", value)} hasError={!!errors.secondName} errorMessage={errors.secondName} />
              </div>

              {/* Segunda fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Apellido Paterno" placeholder="Escribe aquí..." value={formData.firstLastName} onChange={(value) => handleInputChange("firstLastName", value)} hasError={!!errors.firstLastName} errorMessage={errors.firstLastName} />
                <InputField label="Apellido Materno" placeholder="Escribe aquí..." value={formData.secondLastName} onChange={(value) => handleInputChange("secondLastName", value)} hasError={!!errors.secondLastName} errorMessage={errors.secondLastName} />
              </div>

              {/* Tercera fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="CURP" placeholder="Escribe aquí..." value={formData.curp} onChange={(value) => handleInputChange("curp", value)} hasError={!!errors.curp} errorMessage={errors.curp} />
                <InputField label="Número de Empleado" placeholder="Escribe aquí..." value={formData.employeeNumber} onChange={(value) => handleInputChange("employeeNumber", value)} hasError={!!errors.employeeNumber} errorMessage={errors.employeeNumber} />
              </div>

              {/* Cuarta fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Fecha de Nacimiento" placeholder="YYYY-MM-DD" value={formData.birthDate} onChange={(value) => handleInputChange("birthDate", value)} hasError={!!errors.birthDate} errorMessage={errors.birthDate} />
                <InputField label="Ciudad de Nacimiento" placeholder="Escribe aquí..." value={formData.birthCity} onChange={(value) => handleInputChange("birthCity", value)} hasError={!!errors.birthCity} errorMessage={errors.birthCity} />
              </div>

              {/* Quinta fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Estado de Nacimiento" placeholder="Escribe aquí..." value={formData.birthState} onChange={(value) => handleInputChange("birthState", value)} hasError={!!errors.birthState} errorMessage={errors.birthState} />
                <InputField label="Carrera" placeholder="Escribe aquí..." value={formData.major} onChange={(value) => handleInputChange("major", value)} hasError={!!errors.major} errorMessage={errors.major} />
              </div>

              {/* Sexta fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Correo Institucional" placeholder="Escribe aquí..." value={formData.institutionalEmail} onChange={(value) => handleInputChange("institutionalEmail", value)} hasError={!!errors.institutionalEmail} errorMessage={errors.institutionalEmail} />
                <InputField label="Correo Personal" placeholder="Escribe aquí..." value={formData.personalEmail} onChange={(value) => handleInputChange("personalEmail", value)} hasError={!!errors.personalEmail} errorMessage={errors.personalEmail} />
              </div>

              {/* Séptima fila */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Teléfono" placeholder="Escribe aquí..." value={formData.phoneNumber} onChange={(value) => handleInputChange("phoneNumber", value)} hasError={!!errors.phoneNumber} errorMessage={errors.phoneNumber} />
                <InputField label="Contraseña" placeholder="Escribe aquí..." value={formData.password} onChange={(value) => handleInputChange("password", value)} hasError={!!errors.password} errorMessage={errors.password} />
              </div>

              <button type="submit" className="btn-primary w-full mt-6">Enviar</button>
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
    </MotionImplementaton>
  );
};

export default RegisterPage;
