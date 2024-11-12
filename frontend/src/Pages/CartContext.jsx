
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
            if (existingItem) {
                return prevItems.map((prevItem) =>
                    prevItem.id === item.id
                        ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
                        : prevItem
                );
            } else {
                return [...prevItems, item];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            return prevItems
                .map((item) => {
                    if (item.id === itemId && item.quantity > 0) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0); 
        });
    };

    const getTotalCartItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};





