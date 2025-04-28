import profilePicture from "@assets/ghostface.jpg"
import { IoMdCheckmark } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function UserInfoComponent() {
    return (
        <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] w-1/4 h-auto p-6 max-w-min absolute right-10 top-15 transition">
            <div className="flex justify-between">
                <img src={`${profilePicture}`} className="w-1/4 rounded-full" />
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
                <button className="btn-primary text-sm shadow">Editar</button>
            </div>
            <div className="mt-4">
                <div className="flex">
                    <MdEmail className="text-aqua100" />
                    <p className="text-aqua100 ml-2" >Correo electr&oacute;nico</p>
                </div>
                <p className="ml-6 text-black">alejandr0_gc@gmail.com</p>
            </div>
            <div className="mt-4">
                <div className="flex">
                    <FaPhoneAlt className="text-aqua100" />
                    <p className="text-aqua100 ml-2">N&uacute;m. tel&eacute;fono</p>
                </div>
                <p className="ml-6 text-black">81 2650 0357</p>
            </div>
            <div className="border border-gray-300 p-2 mt-2 rounded-lg">
                <div>
                    <p className="text-aqua100">CURP</p>
                    <p className="text-black">GACA970615MNLNRRA5</p>
                </div>
                <div>
                    <p className="text-aqua100">Matr&iacute;cula</p>
                    <p className="text-black">4699752</p>
                </div>
            </div>
        </div>
  );
}

export default UserInfoComponent;