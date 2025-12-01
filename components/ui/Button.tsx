import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { motion } from 'framer-motion';

const { Link } = ReactRouterDOM;

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  className = '',
  onClick 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 border text-base font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
  
  const variants = {
    primary: "border-transparent text-white bg-secondary hover:bg-amber-700 hover:shadow-lg focus:ring-amber-500 shadow-md",
    secondary: "border-transparent text-white bg-primary hover:bg-slate-800 hover:shadow-lg focus:ring-slate-500 shadow-md",
    outline: "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white",
    white: "border-transparent text-primary bg-white hover:bg-gray-50 shadow-md hover:shadow-lg",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const animationProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (to) {
    const MotionLink = motion(Link as any) as any;
    return (
      <MotionLink to={to} className={combinedClasses} onClick={onClick} {...animationProps}>
        {children}
      </MotionLink>
    );
  }

  const MotionA = motion.a as any;
  const MotionButton = motion.button as any;

  if (href) {
    return (
      <MotionA 
        href={href} 
        className={combinedClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={onClick}
        {...animationProps}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionButton className={combinedClasses} onClick={onClick} {...animationProps}>
      {children}
    </MotionButton>
  );
};

export default Button;