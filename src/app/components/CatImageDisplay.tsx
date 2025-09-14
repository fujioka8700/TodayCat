type CatImageDisplayProps = {
    imageUrl: string | null;
    className?: string; // プロパティを追加し、?で省略可能にする
};

const CatImageDisplay = ({imageUrl, className}:CatImageDisplayProps) => {
    if (imageUrl) {
        return (
            <div className={className}>
                <img 
                    src={imageUrl} 
                    alt="猫の画像を表示します。" 
                    width={500} 
                    height="auto" 
                />
            </div>
        );
    }
    
    // imageUrlがnullの場合は何もレンダリングしない
    return null;
}

export default CatImageDisplay;