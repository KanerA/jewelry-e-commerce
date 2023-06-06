import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaDotCircle, FaRegCircle } from 'react-icons/fa';

interface IFeaturedPicturesContainerProps {
    featuredPictures: string[];
}

function FeaturedPicturesContainer(props: IFeaturedPicturesContainerProps) {
    const iconsColor = '#d6b2ea';
    const [currentPicture, setCurrentPicture] = useState<number>(0);

    const onLeftClick = () => setCurrentPicture(prev => prev === 0 ? props.featuredPictures.length - 1 : prev - 1);
    const onRightClick = () => setCurrentPicture(prev => prev === props.featuredPictures.length - 1 ? 0 : prev + 1);

    const time = 3500;

    const containerStyleImage = {
        backgroundImage: `url(${props.featuredPictures[currentPicture]})`,

    }

    useEffect(() => {
        const next = (currentPicture + 1) % props.featuredPictures.length;
        const id = setTimeout(() => setCurrentPicture(next), time);
        return () => clearTimeout(id);
    }, [currentPicture, props.featuredPictures]);


    return (
        <div id="main" className="mainContainer" style={containerStyleImage}>

            <div className="leftArrow" onClick={onLeftClick}><IoIosArrowBack size={20} color={iconsColor} /></div>
            <div className="imageIndicatorContainer">
                {
                    props.featuredPictures.map((_, index) => {
                        // ? maybe add functionality of choosing which picture to show
                        if (currentPicture === index) return <div key="shownImage"><FaDotCircle size={20} color={iconsColor} /></div> // TODO: change to icons
                        return <div key={`unShownImage-${index}`}><FaRegCircle size={20} color={iconsColor} /></div> // TODO: change to icons
                    })
                }
            </div>
            <div className="rightArrow" onClick={onRightClick}><IoIosArrowForward size={20} color={iconsColor} /></div>
        </div>
    );
}

export default FeaturedPicturesContainer;