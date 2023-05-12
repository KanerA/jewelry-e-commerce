import React from 'react';
import { Link } from 'react-router-dom';

const ShopNow = () => {
    return (
        <div className="collections">
            <div>MY COLLECTION</div>
            <Link to="/rings"><div className="rings clickable expandable">RINGS</div></Link> {/* BG-image name featured-3 */}
            <Link to="/necklaces"><div className="necklaces clickable expandable">NECKLACES</div></Link> {/* BG-image name necklace-cover*/}
            <Link to="/bracelets"><div className="bracelets clickable expandable">BRACELETS</div></Link> {/* BG-image name bracelet-cover*/}
            <Link to="/earings"><div className="earings clickable expandable">EARINGS</div></Link> {/* BG-image name featured-4 */}
        </div>
    );
};

export default ShopNow;