import { MouseEventHandler } from 'react';

type MyButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function MyButton({ onClick, className }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded`}
    >
      今日の猫さん
    </button>
  );
}
