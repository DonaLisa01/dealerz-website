import './ProductPage.css';
import detail from '../assets/detail.png';
import hi from '../assets/hi.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false); 
    const { addToCart } = useCart();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch product');
                }
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(err => {
                console.error(err);
                setError('Failed to load product.');
            });
    }, [id]);

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleAddToCart = () => {
       
        if (addedToCart) return;

        const cartItem = {
            ...product,
            quantity: quantity,
        };
        addToCart(cartItem);
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 600);
    };

    return (
        <div className="product-page">
            <div className="breadcrumb">
                All Product &gt; {product.title.split(' ').slice(0, 2).join(' ')}
            </div>

            <div className="product-container">
                <div className="product-image">
                    <div className="large-image">
                        <img src={product.image} alt={product.title} className="large-image-img" />
                    </div>
                    <div className="small-images">
                        {[product.image, product.image, product.image].map((img, index) => (
                            <div className="small-image" key={index}>
                                <img src={img} alt={`${product.title} ${index + 1}`} className="small-image-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-details">
                    <h1 className="product-title">{product.title.split(' ').slice(0, 2).join(' ')}</h1>
                    <div className="rating">★★★★★</div>
                    <div className="price">${product.price}</div>
                    <h2>Product Details</h2>
                    <p className="product-description">{product.description}</p>

                    <div className="quantity-section">
                        <label htmlFor="quantity">Quantity</label>
                        <div className="quantity-controls">
                            <button className="decrement-btn" onClick={handleDecrement}>-</button>
                            <span className="quantity-number">{quantity}</span>
                            <button className="increment-btn" onClick={handleIncrement}>+</button>
                        </div>
                        <span className="note">Add Note</span>
                    </div>

                    <div className="subtotal-section">
                        <span>Sub Total</span>
                        <span className="subtotal-price">${(product.price * quantity).toFixed(2)}</span>
                    </div>

                    <div className="buttons">
                        <img src={hi} className="wishlist-btn" alt="Wishlist" />
                        <img 
                            src={detail} 
                            alt="Add to Cart" 
                            className='add-to-cart-btn' 
                            onClick={handleAddToCart} 
                        />
                    </div>

                    {addedToCart && (
                        <div className="notification">
                            Product added to cart!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;



