import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ onSubmit }: { onSubmit: any }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='fullNameInputsContainer'>
                <input type="text" placeholder="שם" {...register("FirstName", { required: true, maxLength: 30 })} />
                <input type="text" placeholder="שם משפחה" {...register("LastName", { required: true, maxLength: 30 })} />
            </div>
            <div className="emailInputContainer">
                <input type="email" placeholder="אימייל" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className='addressInputsContainer'>
                <input type="text" placeholder="שם רחוב" {...register("StreetName", { required: true })} />
                <input type="text" placeholder="מספר בית / דירה" {...register("ApartmentNumber", { required: true, pattern: /^\d+$/ })} />
            </div>
            <div className="cityInputContainer">
                <input type="text" placeholder="עיר" {...register("City", { required: true })} />
                <select>
                    <option>ישראל</option>
                </select>
            </div>
            <div className='postalCellphoneContainer'>
                <input type="text" placeholder="מיקוד" {...register("PostalCode", {})} />
                <input type="tel" placeholder="מספר טלפון" {...register("MobileNumber", { required: true, maxLength: 10 })} />
            </div>
            <input type="submit" value='המשך' />
        </form>
    );
};
export default CheckoutForm;
