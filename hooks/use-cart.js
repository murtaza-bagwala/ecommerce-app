import { useState, createContext, useContext } from 'react';

import products from '../products.solution.json';

const defaultCart = {
  products: {}
}

export const CartContext = createContext();

export function useCartState() {

  const [cart, updateCart] = useState(defaultCart);

  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product.price
    }
  });

  const subtotal = cartItems.reduce((accumulator, { pricePerUnit, quantity }) => {
    return accumulator + ( pricePerUnit * quantity );
  }, 0);

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);


  const addToCart = ({ id }) => {
    updateCart((prev) => {
      let cart = {...prev};

      if ( cart.products[id] ) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1
        }
      }

      return cart;
    })
  }

  

  return {
    cartItems,
    subtotal,
    quantity,
    addToCart
  }

}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}

