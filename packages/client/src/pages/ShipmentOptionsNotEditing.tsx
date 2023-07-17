import React from 'react';

const ShipmentOptionsNotEditing = ({ setIsEditingForm, setIsPayment, shipmentOption }: any) => {
    return (
        <div className="shipmentOptionsNotEditing">
            <span className="stepTitle">אופן המשלוח</span>
            <span onClick={() => {
                setIsEditingForm(false);
                setIsPayment(false);
            }}>לעריכה</span>
            <div>{shipmentOption === "selfPickup" ? "איסוף עצמי" : shipmentOption === "delivery" ? "משלוח לכתובת" : ""}</div>
        </div>
    );
};

export default ShipmentOptionsNotEditing;