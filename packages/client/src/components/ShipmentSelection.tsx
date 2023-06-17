import React from 'react';
import { TShipmentOptions } from '../pages/Checkout';
import { BiShekel } from 'react-icons/bi';

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
            <div className="shipmentOptionContainer">
                <div className="shipmentInputContainer">
                    <input type='radio' id='selfPickup' name='shipmentOption' value='selfPickup' />
                    <label htmlFor='selfPickup'>
                        <div className='shipmentOptionTitle'>איסוף עצמי</div>
                        <div className='timeRangeForShipment'>כתובת לאיסוף עצמי</div>
                    </label>
                </div>
                <div className='shipmentOptionPrice'>{shippingCostForSelfPickUp}</div>
            </div>


            <div className="shipmentOptionContainer">
                <div className="shipmentInputContainer">
                    <input type='radio' id='delivery' name='shipmentOption' value='delivery' />
                    <label htmlFor='delivery'>
                        <div className='shipmentOptionTitle'>משלוח</div>
                        <div className='timeRangeForShipment'>3-5 ימי עסקים</div>
                    </label>
                </div>
                <div className='shipmentOptionPrice center'>{shippingPriceToAddress}<BiShekel /></div>
            </div>
            <div
                className="stepTwoContinueButton center"
                onClick={() => setIsPayment(true)
                }>
                <span className="stepTwoContinueText">המשך</span>
            </div>
        </div>
    );
};

export default ShipmentSelection;