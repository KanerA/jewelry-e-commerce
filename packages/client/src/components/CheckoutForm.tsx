import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ onSubmit }: { onSubmit: any }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("FirstName", { required: true, maxLength: 30 })} />
            <input type="text" placeholder="Last name" {...register("LastName", { required: true, maxLength: 30 })} />
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile number" {...register("MobileNumber", { required: true, maxLength: 10 })} />
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <input type="text" placeholder="Street Name" {...register("StreetName", { required: true })} />
            <input type="text" placeholder="Apartment Number" {...register("ApartmentNumber", { required: true, pattern: /^\d+$/ })} />
            <input type="text" placeholder="City" {...register("City", { required: true })} />
            <input type="text" placeholder="Country" {...register("Country", {})} />
            <input type="text" placeholder="PostalCode" {...register("PostalCode", {})} />

            <input type="submit" />
        </form>
    );
};
export default CheckoutForm;
