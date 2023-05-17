import React, { useState } from 'react';

const ImageCarousel = (props: any) => {
    const [currentPicture, setCurrentPicture] = useState<number>(props.product.imageSrc);

    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.product.productsImages.length - 1 : prev - 1);
    const onRightClick = () => setCurrentPicture(prev => prev === props.product.productsImages.length - 1 ? 0 : prev + 1);

    return (
        <div id="productCarousel" className="productCarouselContainer">
            <img src={require("../" + currentPicture)} width={300} />
            <div className="rightArrow" onClick={onRightClick}>{"-->"}</div>
            <div className="leftArrow" onClick={onLeftClick}>{"<--"}</div>
            <div className="imageIndicatorContainer">
                {
                    props?.product.productsImages?.map((_: any, index: any) => {
                        // ? maybe add functionality of choosing which picture to show
                        if (currentPicture === index) return <>1</> // TODO: change to icons
                        return <>0</> // TODO: change to icons
                    })
                }
            </div>
        </div>
    );
};

export default ImageCarousel;