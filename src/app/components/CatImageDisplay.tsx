type CatImageDisplayProps = {
    imageUrl: string | null;
};

const CatImageDisplay = ({imageUrl}:CatImageDisplayProps) => {
    if (imageUrl) {
        return (
            <div>
                <img 
                    src={imageUrl} 
                    alt="猫の画像を表示します。" 
                    width={500} 
                    height={500} 
                />
            </div>
        );
    }
    
    // imageUrlがnullの場合は何もレンダリングしない
    return null;
}

export default CatImageDisplay;