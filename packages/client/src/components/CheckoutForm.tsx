import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, maxLength: 10 })} />
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <input type="text" placeholder="Street Name" {...register("Street Name", {})} />
            <input type="text" placeholder="Apartment Number" {...register("Apartment Number", {})} />
            <input type="text" placeholder="Country" {...register("Country", {})} />

            <input type="submit" />
        </form>
    );
};
export default CheckoutForm;
