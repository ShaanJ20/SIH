import React from "react";
import { cn } from "../../lib/helpers"; // updated relative import

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white shadow-md rounded-xl border border-gray-200 p-4",
        className
      )}
      {...props}
    >
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
