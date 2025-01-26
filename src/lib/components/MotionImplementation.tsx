import { motion, Transition } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

const MotionImplementaton: React.FC<Props> = ({ children }) => {
  const transition: Transition = {
    type: 'spring',
    stiffness: 130,
    damping: 15,
    duration: 0.5,  // dale un poco más para ver el efecto
    bounce: 0.2,
  };

  // Para tener un control más preciso, podemos usar un estado
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Guardamos estilo original
    const originalOverflow = document.body.style.overflow;
    
    // Bloqueamos scroll al montar
    document.body.style.overflow = 'hidden';

    // En cuanto termina la animación, restauramos
    if (animationComplete) {
      document.body.style.overflow = originalOverflow;
    }

    // Cuando el componente se desmonte, aseguramos restaurar
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [animationComplete]);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0.6 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      onAnimationComplete={() => {
        // Indicamos que la animación terminó
        setAnimationComplete(true);
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionImplementaton;
