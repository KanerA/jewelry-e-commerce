import React, { useState } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { FaDotCircle, FaRegCircle } from 'react-icons/fa';

interface IProps {
    productImages: string[];
}

const ImageCarousel = ({ productImages }: IProps) => {
    const [currentPicture, setCurrentPicture] = useState<number>(0);
    const iconsColor = '#d6b2ea';

    const onRightClick = () => setCurrentPicture(prev => prev === 0 ? productImages.length - 1 : prev - 1);
    const onLeftClick = () => setCurrentPicture(prev => prev === productImages.length - 1 ? 0 : prev + 1);

    return (
        <div id="productCarousel" className="productCarouselContainer productPageLeftSide">
            <img className="productCarouselSingleImage" src={productImages[currentPicture]} />
            <div className="imageControlsContainer center">
                <RightArrow onRightClick={onRightClick} iconsColor={iconsColor} />
                <div className="imageIndicatorContainer">
                    {
                        productImages.map((_, index) => {
                            // ? maybe add functionality of choosing which picture to show
                            if (currentPicture === index) return <div key="shownImage"><FaDotCircle size={20} color={iconsColor} /></div>
                            return <div key={`unShownImage-${index}`}><FaRegCircle size={20} color={iconsColor} /></div>
                        })
                    }
                </div>
                <LeftArrow onLeftClick={onLeftClick} iconsColor={iconsColor} />
            </div>
        </div>
    );
};

export default ImageCarousel;