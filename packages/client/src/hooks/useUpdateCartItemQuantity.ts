import commerce from "../lib/commerce";

const useUpdateCartItemQuantity = () => {
    return async (id: string, quantity: number) => {
        return await commerce.cart.update(id, { quantity })
    };
};

export default useUpdateCartItemQuantity;