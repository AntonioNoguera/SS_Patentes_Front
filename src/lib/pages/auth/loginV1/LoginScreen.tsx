import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';

const fields: { name: string; label: string; type: string; placeholder: string }[] = [
    { name: 'username', label: 'Username', type: 'text', placeholder: "Correo electrónico" },
    { name: 'password', label: 'Password', type: 'password', placeholder: "Contraseña" }
];

function LoginScreen() {
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    async function handleLogin(formData: Record<string, string>) {
        try {
            const response = await axios.post("https://localhost:7104/api/auth/login", {
                ...formData
            });
            console.log("Respuesta del servidor:", response.data);
            localStorage.setItem("token", response.data.token);
            navigate("/welcome");
        } catch (error) {
            console.error("Error en la solicitud:", error);
            if (axios.isAxiosError(error)) {
                console.error("Error del servidor:", error.response?.data);
            }
            setError("Invalid username or password");
        }
    }

    return (
        <main className="w-full h-screen m-0 p-0" style={{ backgroundColor: "#D5E8F6" }}>
            <div id='logos' className="w-full h-auto flex justify-between">
                <img src="..//fimePNG.png" alt="Logo Fime" className="w-[25rem] h-[12rem]" />
                <img src=".//uanlPNG.png" alt="Logo UANL" className="w-[25rem] h-[12rem]" />
            </div>
            <h1 className="text-[5.25rem] font-black text-center mb-2.5">Patentes FIME</h1>
            <div id='login-form' className="w-full flex flex-col justify-center">
                <Form onSubmitProp={handleLogin} fields={fields} error={error} />
            </div>
        </main>
    );
}

export default LoginScreen;