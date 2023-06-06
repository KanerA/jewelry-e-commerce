import React from 'react';
import { TShipmentOptions } from '../pages/Checkout';

interface IShipmentSelectionProps {
    shippingPriceToAddress: number,
    shippingCostForSelfPickUp: number | string,
    setShipmentOption: (value: TShipmentOptions | ((prevVar: TShipmentOptions) => TShipmentOptions)) => void
    setIsPayment: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const ShipmentSelection = ({ shippingPriceToAddress, shippingCostForSelfPickUp, setShipmentOption, setIsPayment }: IShipmentSelectionProps) => {
    const onRadioChange = (e: any) => {
        setShipmentOption(e.target?.id);
    }

    return (
        <div onChange={onRadioChange} className="shippingOptionsContainer">

            <input type='radio' id='selfPickup' name='shipmentOption' value='selfPickup' />
            <label htmlFor='selfPickup'>
                <div className='shipmentOptionTitle'>איסוף עצמי</div>
                <div className='timeRangeForShipment'>כתובת לאיסוף עצמי</div>
                <div className='shipmentOptionPrice'>{shippingCostForSelfPickUp}</div>
            </label>


            <input type='radio' id='delivery' name='shipmentOption' value='delivery' />
            <label htmlFor='delivery'>
                <div className='shipmentOptionTitle'>משלוח</div>
                <div className='timeRangeForShipment'>3-5 ימי עסקים</div>
                <div className='shipmentOptionPrice'>{shippingPriceToAddress}</div>
            </label>
            <div onClick={() => setIsPayment(true)}>המשך</div>
        </div>
    );
};

export default ShipmentSelection;