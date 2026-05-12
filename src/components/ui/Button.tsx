import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'emergency';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pan-accent disabled:pointer-events-none disabled:opacity-50",
          "min-h-[56px] px-6 py-3 text-lg", // Acessibilidade: Área de toque grande (56px) e fonte maior
          {
            'bg-pan-primary text-white hover:bg-pan-secondary': variant === 'primary',
            'border-2 border-pan-primary bg-transparent text-pan-primary hover:bg-pan-primary hover:text-white': variant === 'secondary',
            'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
            'bg-red-600 text-white hover:bg-red-700 animate-pulse border-4 border-red-800': variant === 'emergency',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
