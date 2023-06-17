import commerce from "../lib/commerce";

const useGetCategoriesData = () => {
    return async () => {
        const categories = await commerce.categories.list();
        return categories;
    }
};

export default useGetCategoriesData;