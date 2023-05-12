import React from 'react';

import IMAGES from '../images';
import FeaturedPicturesContainer from '../components/IntervalCarousel';
import ShopNow from '../components/ShopNow';

function Home(props: any) {
    return (
        <div>
            <FeaturedPicturesContainer featuredPictures={IMAGES} key="featuredContainer" />
            <ShopNow />
        </div>
    );
}

export default Home;