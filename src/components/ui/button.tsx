import * as React from "react"
import { cn } from "@/lib/utils"

// Since we didn't install class-variance-authority, I'll provide a simplified manual implementation to avoid another npm install.
// Oh wait, I didn't install CVA. I'll just use a simple string map.
// Let me update the button implementation to be standalone without CVA/radix-slot for simplicity, or I can just use basic React.ButtonHTMLAttributes.

const buttonVariants = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 glow-effect",
      destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
      outline: "border border-border bg-background shadow-sm hover:bg-light-background hover:text-primary",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-light-background hover:text-primary",
      link: "text-primary underline-offset-4 hover:underline",
      glass: "glass hover:bg-white/40 text-foreground",
    },
    size: {
      default: "h-10 px-5 py-2",
      sm: "h-8 rounded-full px-4 text-xs",
      lg: "h-12 rounded-full px-8 text-base",
      icon: "h-9 w-9",
    },
  }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants.variant
  size?: keyof typeof buttonVariants.variants.size
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants.base,
          buttonVariants.variants.variant[variant],
          buttonVariants.variants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
