import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.state);
    }, [location])
    return (
        <div className="thankyouPage center">
            <div className='thankYouTitle'>תודה רבה על רכישתכם!</div>
            <div>
                <p>קוד ההזמנה שלך הוא:</p>
                <p>{location?.state?.orderID}</p>
            </div>
            <div>
                <p>מספר הזמנה לאיתור בפייפאל הוא:</p>
                <p>{location?.state?.transactionID}</p>
            </div>
        </div>
    );
};

export default ThankYou;