import React from 'react';
import Modal from '@components/Modal/Modal';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 z-10">Modal de Ejemplo</h2>
      <p>Este es el contenido del modal. ¡Puedes personalizarlo como desees!</p>
      <div className="mt-4 text-right">
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ExampleModal;
