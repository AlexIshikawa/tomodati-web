enum ButtonVariants {
  primary = "primary",
}

declare type TButton = {
  children: React.ReactNode;
  variant?: ButtonVariants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
