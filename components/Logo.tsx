
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="DC Commerce Logo"
        className="h-8 md:h-10 w-auto"
        style={{
          filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
};

export default Logo;
