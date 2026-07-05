import { useState } from 'react';

const PictureCard = ({image, message}) => {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="picture-card" onClick={handleFlip}>
            <div className={`picture-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="picture-card-front">
                    <img src={image} alt={message} />
                </div>
                <div className="picture-card-back">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default PictureCard;