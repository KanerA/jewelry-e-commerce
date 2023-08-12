import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { IInitialState, TProduct } from '../store/types';
import DescriptionSection from '../components/DescriptionSection';
import DropdownSelector from '../components/DropdownSelector';
import { useSelector } from 'react-redux';
import { getProductsData } from '../store/selectors';
import { spreadProductsState } from '../utils/helpersProducts';
import AddToCart from '../components/AddToCart';
import useAddToCart from '../hooks/useAddToCart';

// TODO: move this helper func somewhere else
function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}
//

const ProductPage = () => {
    const id = useLocation().pathname.split("/")[2];

    const addToCartFunc = useAddToCart();

    const products: IInitialState["products"] = useSelector(getProductsData);

    const [productImages, setProductImages] = useState<any[]>([]);
    const [productById, setProductById] = useState<TProduct>();
    const [selectedFromDropDown, setSelectedFromDropDown] = useState<number>(0);
    const [sizeOptions, setSizeOptions] = useState<number[]>([]);
    const [selectedVariantOption, setSelectedVariantOption] = useState<string>("");
    const [selectedVariantGroup, setSelectedVariantGroup] = useState<string>("");
    const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

    const onCartClick = async () => {
        if (!!selectedVariantOption && !!selectedVariantGroup) {
            setIsAddingToCart(true);
            const res = await addToCartFunc(id, 1, {
                [selectedVariantGroup]: selectedVariantOption
            });
            setIsAddingToCart(!res?.success);
        } else {
            alert("Please Choose A Size")
        }
    };



    useEffect(() => {
        const spreadProducts = spreadProductsState(products);
        if (spreadProducts.length) {
            const productToDisplay = ensure(spreadProducts.find((val: TProduct) => {
                return val.id === id
            }));
            setProductById(productToDisplay);

            const imagesHolder = productToDisplay.assets.map((val: TProduct) => val.url);
            setProductImages(imagesHolder);
        } else {
            console.log("error in displaying product");
        }
    }, [products, id]);


    useEffect(() => {
        const findVariant = (size: number) => {
            const variantGroup = productById?.variant_groups?.find((group: any) => group.name === "Size");
            const variantOptionId = variantGroup?.options?.find((option: any) => option.name === size)?.id;
            setSelectedVariantOption(variantOptionId);
        };
        if (!!selectedFromDropDown) {
            findVariant(selectedFromDropDown);
        }
    }, [selectedFromDropDown, productById, setSelectedVariantOption])

    useEffect(() => {
        const formatVariantsToSizes = () => {
            const variantGroup = productById?.variant_groups?.find((group: any) => group.name === "Size");
            setSelectedVariantGroup(variantGroup?.id ?? "");
            const options = variantGroup?.options.map((option: any) => option.name) ?? [];
            setSizeOptions(options);
        };
        if (!!productById?.name) {
            formatVariantsToSizes();
        }
    }, [productById, setSelectedVariantGroup, setSizeOptions]);

    return (
        <div className="productPage">
            {
                !productById?.name && <div className='productPageLoader center'>
                    <div>Loading!</div>
                    <div>if loading takes too much time go back to home page or try again later</div>
                </div>
            }
            {
                !!productById?.name && <div className="productDetailsContainer">
                    <div className="productPageRightSide center">
                        <DescriptionSection product={productById!} />
                        <div className='sizeSelectorContainer center' >
                            <div dir="rtl">תבחר/י מידה:</div>
                            <DropdownSelector
                                options={sizeOptions}
                                setSelectedFromDropDown={setSelectedFromDropDown}
                                placeHolder='בחר/י...' />
                        </div>
                        <AddToCart isAddingToCart={isAddingToCart} onCartClick={onCartClick} />
                    </div>
                    <ImageCarousel productImages={productImages} />
                </div>
            }
        </div>
    );
};

export default ProductPage;
