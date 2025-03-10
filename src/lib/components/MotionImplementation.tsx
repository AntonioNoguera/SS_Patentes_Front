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
    duration: 0.5,
    bounce: 0.2,
  };

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    
    document.body.style.overflow = 'hidden';

    if (animationComplete) {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [animationComplete]);

  return (
    <motion.div
    className='w-full' 
      initial={{ y: 200, opacity: 0.6 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      onAnimationComplete={() => {
        setAnimationComplete(true);
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionImplementaton;
