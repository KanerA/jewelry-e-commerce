import React from 'react';
import { useLocation } from 'react-router-dom';
import RINGS from '../products/rings';
import BRACELETS from '../products/bracelets';
import NECKLACES from '../products/necklaces';
import EARRINGS from '../products/earrings';
import ImageCarousel from '../components/ImageCarousel';
import { TProduct } from '../store/types';
import DescriptionSection from '../components/DescriptionSection';
import SizeSelector from '../components/SizeSelector';

// TODO: move this helper func somewhere else
function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}
//

const ProductPage = () => {
    const paramsArr = useLocation().pathname.split("/");
    const id = paramsArr[paramsArr.length - 1];

    // replace this code section to use products in a more smart way
    const products: TProduct[] = [...RINGS, ...BRACELETS, ...NECKLACES, ...EARRINGS];
    const productById = ensure(products.find(val => val.nameEnglish === id)); // change to id
    // 

    return (
        <div dir="rtl" className="productPage">
            < ImageCarousel product={productById} />
            <DescriptionSection product={productById} />
            <div className='sizeSelectorContainer' >
                <div dir="rtl">תבחר/י מידה:</div>
                <SizeSelector sizes={[20, 21, 22]} placeHolder='בחר/י...' />
            </div>
        </div >
    );
};

export default ProductPage;