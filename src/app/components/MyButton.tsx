import { MouseEventHandler } from 'react';

type MyButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function MyButton({ onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded"
    >
      今日の猫さん
    </button>
  );
}
