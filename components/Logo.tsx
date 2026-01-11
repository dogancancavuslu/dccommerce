
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const color = variant === 'white' ? '#FFFFFF' : '#1A2B4A';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="32" 
        viewBox="0 0 40 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path 
          d="M0 4C0 1.79086 1.79086 0 4 0H18C26.8366 0 34 7.16344 34 16C34 24.8366 26.8366 32 18 32H4C1.79086 32 0 30.2091 0 28V4Z" 
          fill={color} 
        />
        <path 
          d="M6 6V26H18C23.5228 26 28 21.5228 28 16C28 10.4772 23.5228 6 18 6H6Z" 
          fill={variant === 'white' ? '#1A2B4A' : '#FFFFFF'} 
        />
        <path 
          d="M12 11V21H18C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11H12Z" 
          fill={color} 
        />
        <path 
          d="M32 8H36C38.2091 8 40 9.79086 40 12V20C40 22.2091 38.2091 24 36 24H32V8Z" 
          fill={color} 
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span 
          className="text-xl md:text-2xl font-black tracking-tighter" 
          style={{ color, fontFamily: 'Inter, sans-serif' }}
        >
          DC
        </span>
        <span 
          className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase opacity-90" 
          style={{ color, fontFamily: 'Inter, sans-serif' }}
        >
          Commerce
        </span>
      </div>
    </div>
  );
};

export default Logo;
