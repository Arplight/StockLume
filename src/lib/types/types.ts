import { ReactNode } from "react";

// props interfaces
export interface MainButtonProps {
  withLink?: string;
  buttonLabel: string;
  isFullWidth?: boolean;
  buttonType?: "button" | "submit" | "reset";
  withIcon?: ReactNode;
}

export interface MainFieldProps {
  fieldLabel: string;
  fieldName: string;
  fieldType?: "text" | "number" | "email" | "password" | "textArea";
  fieldStyle?: string;
  fieldMaxLength?: number;
  isRequired?: boolean;
  autocomplete:
    | "on"
    | "off"
    | "auto"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "off";
}
