import { cn } from "../../utils/cn";

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24", className)}
      {...props}
    >
      {children}
    </div>
  );
}
