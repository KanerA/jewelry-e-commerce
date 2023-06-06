import React from 'react';
import { IFormState } from '../pages/Checkout';

const CheckoutFormNotEditing = ({ setIsEditingForm, formData }: { setIsEditingForm: any, formData: IFormState }) => {
    return (
        <div>
            <span onClick={() => setIsEditingForm(true)}>לעריכה</span>
            <div>{formData.Title} {formData.FirstName} {formData.LastName}</div>
            <div>{formData.StreetName} {formData.ApartmentNumber}</div>
            <div>{formData.City}</div>
            <div>{formData.Country}</div>
            <div>{formData.MobileNumber}</div>
            <div>{formData.Email}</div>
            <div>{formData.PostalCode}</div>
        </div>
    );
};

export default CheckoutFormNotEditing;