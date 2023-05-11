import React, { useState, useEffect } from 'react';

interface IFeaturedPicturesContainerProps {
    featuredPicturesPaths: string[];
}

function FeaturedPicturesContainer(props: IFeaturedPicturesContainerProps) {
    const [currentPicture, setCurrentPicture] = useState<number>(0);
    const time = 3500;

    useEffect(() => {
        console.log("inside")
        const next = (currentPicture + 1) % props.featuredPicturesPaths.length;
        const id = setTimeout(() => setCurrentPicture(next), time);
        return () => clearTimeout(id);
    }, [currentPicture, props.featuredPicturesPaths]);

    return (
        <div className="mainContainer">
            <img height="350px" width="650px" src={props.featuredPicturesPaths[currentPicture]} alt="some picture" />
        </div>
    );
}

export default FeaturedPicturesContainer;