import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "outline" | "optional";
  className?: string;
  type?: "button" | "submit";
};