import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { motion } from "motion/react";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transform-gpu hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:shadow-red-500/20",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:border-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-slate-500/10",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:shadow-none",
        link: "text-primary underline-offset-4 hover:underline hover:shadow-none hover:scale-100",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const [isPressed, setIsPressed] = React.useState(false);
  const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);
  
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && variant !== 'link' && variant !== 'ghost') {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ 
        y: -1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      {...props}
    >
      {children}
      
      {/* Ripple Effect */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: 4, 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Shine Effect */}
      {(variant === 'default' || variant === 'secondary') && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
          whileHover={{
            x: ["0%", "200%"],
            opacity: [0, 1, 0],
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        />
      )}
    </motion.button>
  );
}

export { Button, buttonVariants };
