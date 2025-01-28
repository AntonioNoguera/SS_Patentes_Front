import MotionImplementaton from '@components/MotionImplementation';
import React from 'react';
import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('No se encontró el contenedor #modal-root en el DOM.');
    return null;
  }

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'linear', duration: 0.10 }}
      style={{ position: 'relative', zIndex: 1 }} >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose} >

        <div
          className="bg-white p-6 rounded-xl shadow-md relative"
          onClick={(e) => e.stopPropagation()} >
          <button
            className="text-3xl absolute top-2 right-4 text-gray-500 hover:text-black"
            onClick={onClose} >
            ×
          </button>
          {children}
        </div>
      </div>
    </motion.div>,
    modalRoot
  );
};

export default Modal;
