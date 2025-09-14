"use client";

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export function MyButton() {
  const fetchCatImage = async () : Promise<SearchCatImage> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const result = await res.json();
    return result[0];
  }

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    console.log(catImage.url);
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>今日の猫さん</button>
  );
}