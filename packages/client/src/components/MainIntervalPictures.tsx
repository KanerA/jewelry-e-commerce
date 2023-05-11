import React, { useState, useEffect } from 'react';

interface IFeaturedPicturesContainerProps {
    featuredPicturesPaths: string[];
}

function FeaturedPicturesContainer(props: IFeaturedPicturesContainerProps) {
    const [currentPicture, setCurrentPicture] = useState<number>(0);
    const time = 3500;

    useEffect(() => {
        console.log("inside", currentPicture)
        const next = (currentPicture + 1) % props.featuredPicturesPaths.length;
        const id = setTimeout(() => setCurrentPicture(next), time);
        return () => clearTimeout(id);
    }, [currentPicture, props.featuredPicturesPaths]);

    const onRightClick = () => setCurrentPicture(prev => prev === props.featuredPicturesPaths.length - 1 ? 0 : prev + 1);
    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.featuredPicturesPaths.length - 1 : prev - 1);

    return (
        <div className="mainContainer">
            <img className="image" height="350px" width="650px" src={props.featuredPicturesPaths[currentPicture]} alt="some picture" />
            <div className="rightArrow" onClick={onRightClick}>{"-->"}</div>
            <div className="leftArrow" onClick={onLeftClick}>{"<--"}</div>
        </div>
    );
}

export default FeaturedPicturesContainer;