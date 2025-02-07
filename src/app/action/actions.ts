import { Product } from "../../../types/products";

//  Add to cart function to add product to cart in local storage
export const addToCart = (product: Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if(existingProductIndex > -1){
        cart[existingProductIndex].inventory += 1;
    } else {
        cart.push({ ...product, inventory: 1 });        
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

//  Remove from cart function to remove product from cart in local storage
export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//  Update cart function to update product in cart in local storage
export const updateCartQuantity = (productId : string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

}

//  Get cart function to get cart from local storage
export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}