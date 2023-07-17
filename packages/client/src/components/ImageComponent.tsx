import React from 'react';

const ImageComponent = ({ src, alt, className, onLoad }: {
    src: string, alt: string, className: string, onLoad?: any
}) => {
    return (
        <div className="imageComponent">
            <img onLoad={onLoad} src={src} alt={alt} className={className} />
        </div>
    );
};

export default ImageComponent;
