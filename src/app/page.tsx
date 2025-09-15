'use client';

import { useState } from 'react';
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
      const catImage = await fetchCatImage();
      setCatImageUrl(catImage.url);
    } catch (_error) {
      // console.error('Failed to fetch cat image:', error);
      // エラー時にも`null`をセット
      setCatImageUrl(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">猫画像アプリ</h1>
      <CatImageDisplay imageUrl={catImageUrl} className="my-4" />
      <MyButton onClick={handleClick} />
    </div>
  );
}
