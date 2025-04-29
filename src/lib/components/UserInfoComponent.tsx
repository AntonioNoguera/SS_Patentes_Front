import { useEffect, useRef, useState } from "react";
import profilePicture from "@assets/ghostface.jpg";
import { IoMdCheckmark } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import "@i18n";
import { useTranslation } from "react-i18next";

function UserInfoComponent() {
    const { t } = useTranslation("user_modal_info");

    const [isVisible, setIsVisible] = useState(true); // <--- estado de visibilidad
    const containerRef = useRef<HTMLDivElement>(null); // <--- referencia al contenedor

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsVisible(false); // si clic fuera, ocultar
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!isVisible) {
        return null; // si no está visible, no renderizar nada
    }

    return (
        <div
            ref={containerRef}
            className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-2xl w-96 h-auto p-6 absolute right-10 top-15 transition z-50"
        >
            <div className="flex justify-between">
                <img src={profilePicture} className="w-1/4 rounded-full" />
                <div>
                    <p className="text-aqua100 text-lg">Alejandro Garza</p>
                    <span className="text-gray-300">Solicitante</span>
                </div>
            </div>
            <div className="flex mt-4 h-auto justify-between">
                <div className="flex h-auto items-center">
                    <div className="bg-green-500 max-w-min rounded-full p-1 text-white inline-block">
                        <IoMdCheckmark />
                    </div>
                    <span className="ml-2 text-gray-300">Disponible</span>
                </div>
                <button className="btn-primary text-sm shadow px-12">{t("action_edit")}</button>
            </div>
            <div className="mt-4">
                <div className="flex">
                    <MdEmail className="text-aqua100" />
                    <p className="text-aqua100 ml-2">{t("email")}</p>
                </div>
                <p className="ml-6 text-black">alejandr0_gc@gmail.com</p>
            </div>
            <div className="mt-4">
                <div className="flex">
                    <FaPhoneAlt className="text-aqua100" />
                    <p className="text-aqua100 ml-2">{t("phone")}</p>
                </div>
                <p className="ml-6 text-black">81 2650 0357</p>
            </div>
            <div className="border border-gray-300 p-2 mt-2 rounded-lg">
                <div>
                    <p className="text-aqua100">{t("curp")}</p>
                    <p className="text-black">GACA970615MNLNRRA5</p>
                </div>
                <div>
                    <p className="text-aqua100">{t("registration_number")}</p>
                    <p className="text-black">4699752</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfoComponent;
