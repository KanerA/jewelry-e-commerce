import React from 'react';
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

interface IFavoriteIconProps {
    isFavorite: boolean;
    onClick: (props: any) => void;
}

const FavoriteIcon = ({ isFavorite, onClick }: IFavoriteIconProps) => {
    return (
        <div className="favoriteIcon" onClick={onClick}>
            {isFavorite ? <MdFavorite color='#FF4643' /> : <MdOutlineFavoriteBorder />}
        </div>
    );
};

export default FavoriteIcon;