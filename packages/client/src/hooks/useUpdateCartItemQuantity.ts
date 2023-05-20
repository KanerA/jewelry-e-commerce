import commerce from "../lib/commerce";

const useUpdateCartItemQuantity = () => {
    return async (id: string, quantity: number) => {
        await commerce.cart.update(id, { quantity })
    };
};

export default useUpdateCartItemQuantity;