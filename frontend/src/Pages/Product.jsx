import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import search_icon from '../assets/search_icon.png'; 
import heart from '../assets/heart.png'; 
import filter from '../assets/filter.png'; 
import filters from '../assets/filters.png'; 
import arr from '../assets/arr.png'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="containerp">
      <div className="sidebarp">
        <div className="search-containerp">
          <input type="text" placeholder="Search product" className="search-inputp" />
          <img src={search_icon} alt="Search Icon" className="search-iconp" />
        </div>
        <div className="product-pricep">
          <h3>Price</h3>
          <img src={filter} alt=""/>
        </div>
        <img src={filters} alt="" className='filter'/>
       
        <div className="price-rangep">
          <p>Range</p>
          <span>$5 - $200</span>
        </div>
        <div className='pc'>
          <h3>Product Categories</h3>
          <ul className="categoriesp">
            <li>Coats and Jackets  <img src={arr} alt=""className='p-image'/></li>
            <li>Dresses <img src={arr} alt=""className='p-image'/></li>
            <li>Playsuit <img src={arr} alt=""className='p-image'/></li>
            <li>Shorts <img src={arr} alt=""className='p-image'/></li>
            <li>Tops <img src={arr} alt=""className='p-image'/></li>
            <li>Bottoms <img src={arr} alt=""className='p-image'/></li>
          </ul>
        </div>
        <div className='fp'>
          <h3>Featured Product</h3>
          <div className="featured-productsp">
            {products.slice(0, 6).map(product => (
              <div className="featured-itemp" key={product.id}>
                <img src={product.image} alt={product.title} className="image-placeholderp" />
                <div className="itemp-detailsp">
                  <h4>{product.title.split(' ').slice(0,2).join(' ')}</h4>
                  <span>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-gridp">
        {products.slice(0, 8).map(product => (
          <div 
            className="product-cardp" 
            key={product.id} 
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.title} className="product-imagep" />
            <img src={heart} alt="Favorite" className="heart-icon" />
            <h4>{product.title.split(' ').slice(0, 2).join(' ')}</h4>
            <span className="ratingp">★★★★☆</span>
            <div className="product-textp">{product.description.substring(0, 50)}...</div> 
            <span className="pricep">${product.price}</span>
          </div>
        ))}
        <button className="see-morep">See More</button>
      </div>
    </div>
  );
};

export default Product;






