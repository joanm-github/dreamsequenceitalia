import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ children, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <h2 className="font-mono text-2xl md:text-4xl text-primary crt-glow tracking-wider">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-primary/50 to-transparent" />
        <span className="text-primary/30 font-mono text-xs">///</span>
      </div>
    </div>
  );
};
