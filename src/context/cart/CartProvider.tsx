'use client';
import { useEffect, useState } from 'react';
import { CartContext, CartItem, CartState } from './CartContext';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem('cartItems');
    return storageCartItems ? JSON.parse(storageCartItems) : [];
  });

  useEffect(() => {
    console.log('Saving cart items to storage');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (newItem: CartItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const cartState: CartState = {
    items: cartItems,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
