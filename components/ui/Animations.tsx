import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export const FadeIn: React.FC<HTMLMotionProps<"div"> & { delay?: number, direction?: 'up' | 'down' | 'left' | 'right' }> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "", 
  ...props 
}) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  };

  const initial = { opacity: 0, x: 0, y: 0, ...directions[direction] };
  const MotionDiv = motion.div as any;

  return (
    <MotionDiv
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export const FadeInStagger: React.FC<HTMLMotionProps<"div"> & { stagger?: number, faster?: boolean }> = ({ 
  children, 
  className = "", 
  stagger = 0.1,
  faster = false,
  ...props 
}) => {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: { 
          transition: { 
            staggerChildren: stagger,
            delayChildren: faster ? 0 : 0.2
          } 
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export const FadeInItem: React.FC<HTMLMotionProps<"div">> = ({ children, className = "", ...props }) => {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5, 
            ease: "easeOut" 
          } 
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export const ScaleIn: React.FC<HTMLMotionProps<"div"> & { delay?: number }> = ({ 
  children, 
  delay = 0, 
  className = "", 
  ...props 
}) => {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};