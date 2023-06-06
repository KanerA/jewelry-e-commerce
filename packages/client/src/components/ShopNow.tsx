import React from 'react';
import { Link } from 'react-router-dom';



// each category gets a row, displays 3-4 images, when hovering the container of the category, one of the images of the same
// category will slide and reveal the name of the category, each time random image

const ShopNow = () => {
    return (
        <div id="collections" className="collections">
            <div className='collectionsTitle'>MY COLLECTION</div>
            <div className="collectionsLinksContainer">
                <div className="rings clickable expandable"><Link to="/rings">RINGS</Link></div> {/* BG-image name featured-3 */}
                <div className="necklaces clickable expandable"><Link to="/necklaces">NECKLACES</Link></div> {/* BG-image name necklace-cover*/}
                <div className="bracelets clickable expandable"><Link to="/bracelets">BRACELETS</Link></div> {/* BG-image name bracelet-cover*/}
                <div className="earrings clickable expandable"><Link to="/earrings">EARRINGS</Link></div> {/* BG-image name featured-4 */}
            </div>
        </div>
    );
};

export default ShopNow;