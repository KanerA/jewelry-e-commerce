import React from 'react';

import IMAGES from '../images';
import FeaturedPicturesContainer from '../components/IntervalCarousel';

function Home(props: any) {
    return (
        <div>
            Sweet Home Alabama
            <FeaturedPicturesContainer featuredPictures={IMAGES} key="featuredContainer" />
        </div>
    );
}

export default Home;