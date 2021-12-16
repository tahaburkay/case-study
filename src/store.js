import create from "zustand";
import products from "./data/product.json"

const useStore = create((set) => ({
    basket: {
        count: 0,
        amount: 0,
        totalCargoAmount: 500,
    },
    searchedProducts: [],
    selectedProducts: [],
    categoryName: 'Tüm Kategoriler'
    ,
    searchProducts: (key) => {
        const regex = new RegExp(`^${key}`, "gi")
        const foundedProducts = products.filter(product => regex.test(product.name));

        if (!foundedProducts.length) {
            return;
        }

        set((state) => {
            state.searchedProducts = foundedProducts;
        });
    },
    addProduct: (product) => {
        set((state) => {
            state.basket.count++;
            state.basket.amount = state.basket.amount + parseFloat(product.price);;
            state.basket.totalCargoAmount = state.basket.totalCargoAmount - parseFloat(product.price);
        });
    },
    removeProduct: (product) => {
        set((state) => {
            if (state.basket.count !== 0) {
                state.basket.count--;
                state.basket.amount = state.basket.amount - parseFloat(product.price);;
                state.basket.totalCargoAmount = state.basket.totalCargoAmount + parseFloat(product.price);
            }
        });
    },
    selectedCategory: (category) => {
        
        const selectedProducts = products.filter((item) => item.category === category);

        set((state) => {
            state.searchedProducts = [];
            state.selectedProducts = (selectedProducts ? selectedProducts : products);
            state.categoryName = category;
        });
    },
}));


export default useStore;