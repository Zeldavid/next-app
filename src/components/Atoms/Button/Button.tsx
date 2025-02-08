"use client";

interface ButtonProps {
  textContent: string;
  disabled?: boolean;
  buttonType: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({
  textContent,
  buttonType,
  onClick,
  disabled,
}: ButtonProps) => {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <button
      disabled={disabled}
      onClick={handleOnClick}
      className={`flex items-center justify-center w-full h-[56px] rounded-lg border cursor-pointer ${
        buttonType === "primary"
          ? "border-colorTertiary bg-colorPrimary text-primary"
          : "bg-colorSecondary text-secondary"
      }
      ${disabled && "bg-slate-300 text-secondary"}
      `}
    >
      <p className={`font-archivo text-base font-bold`}>{textContent}</p>
    </button>
  );
};

export default Button;
