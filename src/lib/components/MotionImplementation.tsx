import { motion, Transition } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const MotionImplementaton: React.FC<Props> = ({ children }) => { 
  const transition: Transition = {
    type: 'spring',
    stiffness: 130,
    damping: 15,
    duration: 0.1,
    delay: 0.0,
    bounce: 0.2,
  };

  useEffect(() => { 
    const originalOverflow = document.body.style.overflow;
 
    document.body.style.overflow = 'hidden';
 
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0.6 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionImplementaton;
