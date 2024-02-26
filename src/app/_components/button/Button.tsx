import Link from 'next/link';

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

export default function Button({
  className = 'text-white p-3 bg-emerald-500 rounded text-center w-36 focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600',
  text = 'Button',
  onClick,
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
