'use client';

import { useState, useEffect } from 'react';
import CatImageDisplay from './components/CatImageDisplay';
import { MyButton } from './components/MyButton';

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Home() {
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null);

  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const result = await res.json();
    return result[0];
  };

  const handleClick = async (): Promise<void> => {
    try {
      const catImage: SearchCatImage = await fetchCatImage();
      setCatImageUrl(catImage.url);
    } catch (_error) {
      // console.error('Failed to fetch cat image:', error);
      // エラー時にも`null`をセット
      setCatImageUrl(null);
    }
  };

  // useEffectフックは、コンポーネントが最初にマウントされた時、一度だけ実行されます。
  useEffect(() => {
    handleClick();
  }, []); // 空の依存配列 [] は、マウント時にのみ実行されることを保証します。

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-4">猫画像アプリ</h1>
      <CatImageDisplay imageUrl={catImageUrl} />
      <MyButton onClick={handleClick} className="mt-4" />
    </div>
  );
}
