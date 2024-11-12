import './Collection.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Button from '../../assets/Button.png';

const Collection = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data.slice(0, 6)); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleImageClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
      <div className="collection">
        <h2>Our Premium Collection</h2>

        {isMobile ? (
         
          <select className="collection-dropdown" onChange={(e) => navigate(e.target.value)}>
            <option value="">Select Category</option>
            <option value="/all-products">All Products</option>
            <option value="/coats-jacket">Coats & Jacket</option>
            <option value="/dressed">Dressed</option>
            <option value="/playsuit">Playsuit</option>
            <option value="/short">Short</option>
            <option value="/skirt">Skirt</option>
            <option value="/t-shirt">T-Shirt</option>
          </select>
        ) : (
         
          <ul className="collection-menu">
            <li onClick={() => navigate('/all-products')}>All Products</li>
            <li onClick={() => navigate('/coats-jacket')}>Coats & Jacket</li>
            <li onClick={() => navigate('/dressed')}>Dressed</li>
            <li onClick={() => navigate('/playsuit')}>Playsuit</li>
            <li onClick={() => navigate('/short')}>Short</li>
            <li onClick={() => navigate('/skirt')}>Skirt</li>
            <li onClick={() => navigate('/t-shirt')}>T-Shirt</li>
          </ul>
        )}

        <div className="cards-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img 
                className='e' 
                src={product.image} 
                alt={product.title} 
                onClick={() => handleImageClick(product.id)} 
              />
              <h6>{product.category}</h6>
              <h2>{product.title.split(' ').slice(0,2).join(' ')}</h2>
              <img src={Button} alt=""/>
            </div>
          ))}
        </div>

        <button className="find-more">Find out More</button>
      </div>
    );
};

export default Collection;
