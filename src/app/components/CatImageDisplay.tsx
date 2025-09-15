import Image from 'next/image';

type CatImageDisplayProps = {
  imageUrl: string | null;
};

const CatImageDisplay = ({ imageUrl }: CatImageDisplayProps) => {
  if (imageUrl) {
    return (
      <div>
        <Image
          src={imageUrl}
          alt="猫の画像を表示します。"
          width={500}
          height={500}
          // className="rounded-sm w-full h-auto"
        />
      </div>
    );
  }

  // imageUrlがnullの場合は何もレンダリングしない
  return null;
};

export default CatImageDisplay;
