import {motion, Transition} from 'framer-motion';  
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MotionImplementaton:  React.FC<Props> = ({children}) => {
    const transition: Transition = {
        type: "spring",
        stiffness: 220,
        damping: 15,
        duration: 0.7,
        delay: 0.0,
        bounce: 0.2,
      };

    return (
        <motion.div
            initial = {{ y: 200, opacity: 0.60 }}
            animate = {{ y: 0, opacity: 1 }}
      transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default MotionImplementaton;