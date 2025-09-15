import { MouseEventHandler } from 'react';

type MyButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function MyButton({ onClick, className }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-gray-500 hover:bg-gray-700 active:bg-gray-900 text-white font-bold py-2 px-4 rounded`}
    >
      今日のネコさん
    </button>
  );
}
