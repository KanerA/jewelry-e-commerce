import React from 'react';
import { IFormState } from '../pages/Checkout';

const CheckoutFormNotEditing = ({ setIsEditingForm, formData }: { setIsEditingForm: any, formData: IFormState }) => {
    return (
        <div className="checkoutFormNotEditing">
            <span onClick={() => setIsEditingForm(true)}>לעריכה</span>
            <div>{formData.Title} {formData.FirstName} {formData.LastName}</div>
            <div>{formData.Email}</div>
            <div>{formData.StreetName} {formData.ApartmentNumber}, {formData.City}, {formData.Country}</div>
            <div>{formData.PostalCode}</div>
            <div>{formData.MobileNumber}</div>
        </div>
    );
};

export default CheckoutFormNotEditing;