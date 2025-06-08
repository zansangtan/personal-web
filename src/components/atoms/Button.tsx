import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | string;
}

const Button: React.FC<ButtonProps> = ({ 
  children,
  onClick,
  type = 'button',
  variant = 'primary' 
}) => {
  const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200';

  const variantStyles: { [key: string]: string } = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  const selectedVariantStyle = variantStyles[variant] || (typeof variant === 'string' && !variantStyles[variant] ? variant : variantStyles.primary);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariantStyle}`}
    >
      {children}
    </button>
  );
};

export default Button; 