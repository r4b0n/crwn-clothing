import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, product) => {
  // find if cartItems contains product
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  // if found increment quantity
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / new cartItems
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
