import React from "react";
import clsx from "clsx";
import { Tooltip } from "@mui/material";

// Tipe untuk ukuran tombol
type ButtonSize = "small" | "medium" | "large";

// Tipe untuk posisi ikon
type IconPosition = "left" | "right";

// Tipe untuk posisi tooltip
type TooltipPosition = "top" | "bottom" | "left" | "right";

// Tipe untuk varian warna tombol
type ButtonVariant = "red" | "blue" | "green";

type Button = "button" | "submit" | "reset" | undefined;

interface SuperButtonProps {
  type: Button;
  label: string;
  size?: ButtonSize;
  variant: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  onClick?: () => void;
  disabled?: boolean;
}

const SuperButton: React.FC<SuperButtonProps> = ({
  type,
  label,
  size = "medium",
  variant,
  icon,
  iconPosition = "left",
  tooltip,
  tooltipPosition = "top",
  onClick,
  disabled = false,
}) => {
  // Class untuk ukuran tombol
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-5 text-base",
    large: "py-3 px-7 text-lg",
  };

  // Class untuk varian warna
  const variantClasses = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <Tooltip title={tooltip || ""} placement={tooltipPosition} arrow disableHoverListener={!tooltip}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "relative flex items-center justify-center rounded-md text-white transition duration-300",
          sizeClasses[size],
          variantClasses[variant],
          disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
        )}
      >
        {icon && iconPosition === "left" && <span className="mr-2 flex items-center">{icon}</span>}
        <span>{label}</span>
        {icon && iconPosition === "right" && <span className="ml-2 flex items-center">{icon}</span>}
      </button>
    </Tooltip>
  );
};

export default SuperButton;
