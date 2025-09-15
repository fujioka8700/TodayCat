import Image from 'next/image';

type CatImageDisplayProps = {
  imageUrl: string | null;
  className?: string; // プロパティを追加し、?で省略可能にする
};

const CatImageDisplay = ({ imageUrl, className }: CatImageDisplayProps) => {
  if (imageUrl) {
    return (
      <div className={className}>
        <Image
          src={imageUrl}
          alt="猫の画像を表示します。"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    );
  }

  // imageUrlがnullの場合は何もレンダリングしない
  return null;
};

export default CatImageDisplay;
