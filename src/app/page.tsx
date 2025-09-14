import Image from "next/image";
import { MyButton } from './components/MyButton';

export default function Home() {  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">猫画像アプリ</h1>
      <img src="https://cdn2.thecatapi.com/images/dpc.jpg" alt="cat"/>
      <MyButton />
    </div>
  );
}
