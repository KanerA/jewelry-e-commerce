import React, { useState, useEffect } from 'react';

interface IFeaturedPicturesContainerProps {
    featuredPictures: string[];
}

function FeaturedPicturesContainer(props: IFeaturedPicturesContainerProps) {
    const [currentPicture, setCurrentPicture] = useState<number>(0);

    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.featuredPictures.length - 1 : prev - 1);
    const onRightClick = () => setCurrentPicture(prev => prev === props.featuredPictures.length - 1 ? 0 : prev + 1);

    const time = 3500;

    const containerStyleImage = {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${props.featuredPictures[currentPicture]})`,
        height: '40em', // override in css file
        width: '85em', // override in css file
    }

    useEffect(() => {
        const next = (currentPicture + 1) % props.featuredPictures.length;
        const id = setTimeout(() => setCurrentPicture(next), time);
        return () => clearTimeout(id);
    }, [currentPicture, props.featuredPictures]);


    return (
        <div id="main" className="mainContainer" style={containerStyleImage}>
            <div className="rightArrow" onClick={onRightClick}>{"-->"}</div>
            KAMA Jewelry
            <div className="leftArrow" onClick={onLeftClick}>{"<--"}</div>
            <div className="imageIndicatorContainer">
                {
                    props.featuredPictures.map((_, index) => {
                        // ? maybe add functionality of choosing which picture to show
                        if (currentPicture === index) return <span key="shownImage">1</span> // TODO: change to icons
                        return <span key={`unShownImage-${index}`}>0</span> // TODO: change to icons
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedPicturesContainer;