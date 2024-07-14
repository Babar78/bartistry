"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

interface CustomButtonProps {
  id?: string;
  label: string;
  onClick?: () => void;
  roundedFull?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  icon?: React.ReactNode;
}

const CustomButton = ({
  id,
  label,
  onClick,
  roundedFull = false, // Default value for roundedFull
  disabled = false, // Default value for disabled
  withIcon = false, // Default value for withIcon
  icon,
}: CustomButtonProps) => {
  return (
    <Button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`bg-black text-white border-[rgba(225,255,255,0.15)]
      } border-2 px-4 py-2 ${
        roundedFull ? "rounded-full" : ""
      } flex gap-2 items-center`}
    >
      {withIcon ? icon : null}
      {label}
    </Button>
  );
};

export default CustomButton;
