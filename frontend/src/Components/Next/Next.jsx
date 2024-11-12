
import './Next.css';
import heart from '../../assets/heart.png';
import pc from '../../assets/pc.png';
import grp from '../../assets/grp.png';
import notification from '../../assets/nb.png';
import search_icon from '../../assets/search_icon.png'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../Pages/CartContext'; 


const Next = () => {
  const { getTotalCartItems } = useCart();  

  const totalItemsInCart = getTotalCartItems(); 

  return (
    <div className='next'>
      <div className="next-menu">
        <div className='menu'>
          <li>
            <Link to="/shop" className="shop-link">Shop</Link> 
          </li>
          <li>
            <Link to="/gallery" className="gallery-link">Gallery</Link> 
          </li>
          <li>About</li>
          <li>Blog</li>
        </div>
        <div className="search-containern">
          <input type="text" placeholder="Search what you need" />
          <img src={search_icon} alt="Search Icon" className="search-iconn" />
        </div>
        <div className="next-icon">
          <li>
            <img src={heart} alt='Wishlist' className='heart' />
          </li>
          <li>
            <Link to="/cart" className="cart-link" >
              <img src={pc} alt='Cart'  className='bellt' />
            </Link>
            
            {totalItemsInCart > 0 && <div className="nav-cart-count">{totalItemsInCart}</div>} 
          </li>
          <li><img src={grp} alt='Profile' className='bellp' /></li>
          <li><img src={notification} alt='Notification' className='bell' /></li>
        </div>
      </div>
    </div>
  );
}

export default Next;


