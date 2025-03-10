import React, { useState } from "react"; 
import InputField from "@components/InputField";
import { enqueueSnackbar } from "notistack";

type Field = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}

interface FormProps {
    onSubmitProp: (formData: Record<string, string>) => Promise<void>;
    fields: Field[];
    isLoginForm: boolean;
}
const Form: React.FC<FormProps> = ({ onSubmitProp, fields, isLoginForm }) => {
    const [formData, setFormData] = useState<Record<string, any>>(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const [errors, setErrors] = useState<Record<string, any>>(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value)
    };

    const validateField = (field: string, value: string) => {
        const errorMessage = validateRequired(value);
        setErrors((prev) => ({ ...prev, [field]: errorMessage || "" }));
    };

    const validateRequired = (value: string): string | null => {
        return value.trim() === "" ? "Este campo es obligatorio." : null;
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isFormValid()) {
            enqueueSnackbar("Formulario enviado correctamente.", { variant: "success" });
            await onSubmitProp(formData);
        } else {
            enqueueSnackbar("Por favor, completa todos los campos.", { variant: "error" });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="grid grid-cols-2 gap-x-6 p-6 w-full h-full max-w-md mx-auto rounded-lg"
        >
            {/*{fields.map((field) => (*/}
            {/*    <InputField*/}
            {/*        key={field.name}*/}
            {/*        label={field.label}*/}
            {/*        type={field.type || "text"}*/}
            {/*        placeholder={field.placeholder}*/}
            {/*        name={field.name}*/}
            {/*        value={formData[field.name]}*/}
            {/*        onChange={handleChange}*/}
            {/*        hasError={!!errors[field.name]}*/}
            {/*        errorMessage={errors[field.name]}*/}
            {/*    />*/}
            {/*))}*/}
            {
                isLoginForm && < div style={{ textDecoration: 'underline', textAlign: 'right' }}>
                    Olvidé mi contraseña
                </div>
            }
              <button
                type="submit"
                className="btn-primary w-full mt-8"
              >
                Enviar
              </button>
        </form>
    );
};

export default Form;

 