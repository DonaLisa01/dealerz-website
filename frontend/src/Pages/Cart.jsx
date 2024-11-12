import './Cart.css';
import cartb from '../assets/cartb.png';
import listb from '../assets/listb.png';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    
    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1 className="cart-title">My Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Your Cart is Empty</p>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="itemc-image">
                                        <img src={item.image} alt={item.title} className="item-image" /> 
                                    </div>
                                    <div className="itemc-details">
                                        <h5 className="itemc-name">{item.title}</h5>
                                        <p className="itemc-info">Size: {item.size || 'N/A'}</p> 
                                        <p className="itemc-info">
                                            Quantity: <span className="quantity">{item.quantity}</span>
                                        </p>
                                        <p className="itemc-price">${(item.price * item.quantity).toFixed(2)}</p> 
                                        <div className="itemc-actions">
                                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                                <img src={cartb} alt="Remove from cart" />
                                            </button>
                                            <button className="wishlist-button">
                                                <img src={listb} alt="Add to wishlist" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="coupon-section">
                                <h5>Have a Coupon?</h5>
                                <input type="text" placeholder="Enter your coupon code" />
                                <button className="apply-button">Apply</button>
                            </div>
                            <div className="totals-section">
                                <h5>Cart Totals</h5>
                                <p>Subtotal: <span>${calculateSubtotal()}</span></p> {/* Calculate subtotal */}
                                <p>Shipping: <span>Free Shipping</span></p>
                                <p>Shipping to: <span>Sydney</span></p>
                                <p>Total: <span>${calculateSubtotal()}</span></p> {/* Show total */}
                                <button className="checkout-button">Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;



