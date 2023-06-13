import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state);
    }, [location])
    return (
        <div className="thankyouPage">
            <div>{location?.state?.orderID}</div>
            <div>{location?.state?.transactionID}</div>
        </div>
    );
};

export default ThankYou;