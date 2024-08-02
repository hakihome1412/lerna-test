import React from "react";

import "./index.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`min-h-[32px] flex justify-center items-center bg-primary text-black font-semibold px-4 py-1 rounded-[10px] cursor-pointer transition duration-300 hover:bg-primary/80 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
