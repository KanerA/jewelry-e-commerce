import React, { useState, useEffect } from 'react';

interface IFeaturedPicturesContainerProps {
    featuredPictures: string[];
}

function FeaturedPicturesContainer(props: IFeaturedPicturesContainerProps) {
    const [currentPicture, setCurrentPicture] = useState<number>(0);
    const time = 3500;

    useEffect(() => {
        console.log("inside", currentPicture)
        const next = (currentPicture + 1) % props.featuredPictures.length;
        const id = setTimeout(() => setCurrentPicture(next), time);
        return () => clearTimeout(id);
    }, [currentPicture, props.featuredPictures]);

    const onRightClick = () => setCurrentPicture(prev => prev === props.featuredPictures.length - 1 ? 0 : prev + 1);
    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.featuredPictures.length - 1 : prev - 1);

    return (
        <div className="mainContainer">
            <img
                className="image"
                height="350px"
                width="650px"
                src={props.featuredPictures[currentPicture]}
                alt="some picture"
            />
            <div className="rightArrow" onClick={onRightClick}>{"-->"}</div>
            <div className="leftArrow" onClick={onLeftClick}>{"<--"}</div>
            <div className="imageIndicatorContainer">
                {
                    props.featuredPictures.map((_, index) => {
                        // ? maybe add functionality of choosing which picture to show
                        if (currentPicture === index) return <>1</> // TODO: change to icons
                        return <>0</> // TODO: change to icons
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedPicturesContainer;