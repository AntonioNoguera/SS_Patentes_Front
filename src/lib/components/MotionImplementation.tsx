import { motion, Transition } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

enum Direction {
  BOTTOM = 'bottom',
  RIGHT = 'right',
}

type Props = {
  children: ReactNode;
  direction?: Direction;
};

const MotionImplementation: React.FC<Props> = ({ children, direction = Direction.BOTTOM }) => {
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

  const initialPosition =
    direction === Direction.RIGHT ? { x: 200, opacity: 0.6 } : { y: 200, opacity: 0.6 };
  const animatePosition = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      className='w-full'
      initial={initialPosition}
      animate={animatePosition}
      transition={transition}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      {children}
    </motion.div>
  );
};

export { Direction };
export default MotionImplementation;