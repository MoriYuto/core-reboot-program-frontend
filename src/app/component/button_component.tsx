"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { STORAGE_KEY } from "../diagnosis/data";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const ButtonComponent = ({ children, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-[2.4rem] py-[1rem] rounded-md transition min-w-[4.8rem] min-h-[4.8rem]",
        className
      )}
    >
      {children}
    </button>
  );
};

type StartDiagnosisButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const StartDiagnosisButton = ({ children, className }: StartDiagnosisButtonProps) => {
  const handleClick = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <Link
      href="/diagnosis/step1"
      onClick={handleClick}
      className={clsx(
        "px-[2.4rem] py-[1rem] rounded-md transition min-w-[4.8rem] min-h-[4.8rem] bg-primary inline-flex items-center justify-center",
        className
      )}
    >
      {children}
    </Link>
  );
};
