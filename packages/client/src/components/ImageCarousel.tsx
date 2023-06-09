import React, { useState } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const ImageCarousel = (props: any) => {
    const [currentPicture, setCurrentPicture] = useState<number>(props.product.imageSrc);

    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.product.productsImages.length - 1 : prev - 1);
    const onRightClick = () => setCurrentPicture(prev => prev === props.product.productsImages.length - 1 ? 0 : prev + 1);

    return (
        <div id="productCarousel" className="productCarouselContainer productPageLeftSide">
            <img className="productCarouselSingleImage" src={props.product.image.url} />
            <div className="imageControlsContainer">

                <RightArrow onRightClick={onRightClick} iconsColor={"red"} />
                <div className="imageIndicatorContainer">
                    {
                        props?.product.productsImages?.map((_: any, index: any) => {
                            // ? maybe add functionality of choosing which picture to show
                            if (currentPicture === index) return <>1</> // TODO: change to icons
                            return <>0</> // TODO: change to icons
                        })
                    }
                </div>
                <LeftArrow onLeftClick={onLeftClick} iconsColor={"red"} />
            </div>
        </div>
    );
};

export default ImageCarousel;