import React from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
    hasError?: boolean;
    errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    hasError = false,
    errorMessage,
}) => {

    const inputStyle = `w-full p-2  border rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${hasError ? "border-red-500" : "border-gray-300"}`;

    return (
        <div className={`${errorMessage ? "mb-7" : ""} relative`}> 
            {label && (
                <label className="block text-lg font-semibold mb-1">{label}</label>
            )}
            <input
                type="text"
                placeholder={placeholder}
                className={inputStyle}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {hasError || errorMessage != null && (
                <p className="absolute z-10 text-red-500 text-sm mt-1 bg-white">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default InputField;
