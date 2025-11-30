import React from 'react';
import { Link } from 'react-router-dom';

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
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-secondary hover:bg-amber-700 focus:ring-amber-500 shadow-sm",
    secondary: "border-transparent text-white bg-primary hover:bg-slate-800 focus:ring-slate-500",
    outline: "border-secondary text-secondary bg-transparent hover:bg-secondary/10",
    white: "border-transparent text-secondary bg-white hover:bg-gray-50",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;