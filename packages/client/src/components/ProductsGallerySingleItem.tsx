import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import PriceTag from './PriceTag';
import AddToCart from './AddToCart';
import { TProduct } from '../store/types';
import FavoriteIcon from './FavoriteIcon';
import useAddToCart from '../hooks/useAddToCart';
import { getFavorites } from '../store/selectors';
import { actionAddFavorite, actionRemoveFavorite } from '../store/actions';

const ProductsGallerySingleItem = (props: any) => {
    const dispatch = useDispatch();
    const locationDetails = useLocation().pathname.split("/");

    const addToCartFunc = useAddToCart();
    const favorites = useSelector(getFavorites);
    const itemInitialFavState = favorites.find((val: TProduct) => val === props.id);

    const [isFavorite, setIsFavorite] = useState<boolean>(!!itemInitialFavState);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);

    const onFavoriteClick = (e: any) => {
        e.preventDefault();
        !isFavorite ? dispatch(actionAddFavorite(props.id)) : dispatch(actionRemoveFavorite(props.id));
        setIsFavorite(prev => !prev);
    };

    const onCartClick = async (e: any) => {
        e.preventDefault();
        const qty = 1; // change to users choice
        setIsAddingToCart(true);
        if (locationDetails[1] === "earrings" || locationDetails[1] === "bracelets") {
            const res = await addToCartFunc(props?.id, qty);
            setIsAddingToCart(!res?.success);
            return;
        }

        const size = prompt(`choose a size: ${props.sizes.toString()}`);
        if (size) {
            const variantOptionId = props.findVariant(size.toUpperCase(), props.variantGroup);
            const res = await addToCartFunc(props?.id, qty, {
                [props.variantGroup.id]: variantOptionId
            });
            setIsAddingToCart(!res?.success);

        } else {
            new Error("no size where chosen");
            setIsAddingToCart(false)
        }
    };

    const removePTag = (text: string): string => {
        const temp = text?.split("<p>");
        const temp2 = temp?.[0] === "" ? temp?.[1] : temp?.[0];
        return temp2?.split("</p>")?.[0];
    };


    return (
        <Link to={`/product/${props.id}`}>
            <div className="gallerySingleItem ">
                <div className="itemContainer center"> {/* TODO: change alt prop */}
                    <div className='itemAndImageContainer center'>
                        {
                            !imageLoaded &&
                            <Skeleton
                                className="itemImage"
                                style={{ height: "15rem" }}
                                animation="wave"
                            />
                        }
                        <img
                            className="itemImage expandable"
                            src={props.imageSrc}
                            alt={props.nameEnglish}
                            onLoad={() => setImageLoaded(true)}
                        />
                        <SingleItemDetails
                            name={props.nameEnglish}
                            description={removePTag(props.description)}
                            price={props.price.formatted_with_symbol}
                            onCartClick={onCartClick}
                            isFavorite={isFavorite}
                            onFavoriteClick={onFavoriteClick}
                            isAddingToCart={isAddingToCart}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const SingleItemDetails = (props: any) => {
    return <div className='itemDetails center'>
        <div className='productDataContainer'>
            <div className="itemName">{props.name}</div>
            <PriceTag price={props.price} />
        </div>
        <div className="actionButtons">
            <FavoriteIcon onClick={props.onFavoriteClick} isFavorite={props.isFavorite} />
            <AddToCart isAddingToCart={props.isAddingToCart} onCartClick={props.onCartClick} />
        </div>
    </div>
};

export default ProductsGallerySingleItem;