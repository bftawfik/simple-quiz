interface ButtonProps {
  className?: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  disabled,
  onClick,
  className = "text-white p-3 bg-emerald-500 rounded text-center w-48 focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 disabled:hover:bg-emerald-700 disabled:bg-emerald-700",
  text = "Button",
}: ButtonProps) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
