import React from 'react';

import FeaturedPicturesContainer from '../components/MainIntervalPictures';
// import path from 'path';

function Home(props: any) {
    const images = [
        "images/wallpaper-1.jpg",
        "images/wallpaper-2.jpg"
    ]
    return (
        <div>
            Sweet Home Alabama
            <FeaturedPicturesContainer featuredPicturesPaths={images} key="featuredContainer" />
        </div>
    );
}

export default Home;