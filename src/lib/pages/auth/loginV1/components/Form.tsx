import React, { useState } from "react"; 

type Field = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}

interface FormProps {
    onSubmitProp: (formData: Record<string, string>) => Promise<void>;
    fields: Field[];
    error : string
}
const Form: React.FC<FormProps> = ({ onSubmitProp, fields, error }) => {
    const [formData, setFormData] = useState<Record<string, string>>(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onSubmitProp(formData);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col items-center gap-4 p-6 w-full max-w-md mx-auto  rounded-lg"
        >
            {fields.map((field) => (
                <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    name={field.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            ))}
            <a href="#" className="text-blue-600 hover:underline">Olvidé mi contraseña</a>

            <div id="buttons-login" className="w-full flex flex-col items-center gap-2">
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Ingresar
                </button>
                <a href="#" className="text-blue-600 hover:underline">
                    No cuentas con un usuario? Regístrate aquí!
                </a>
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default Form;

 