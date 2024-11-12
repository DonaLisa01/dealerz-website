import './Next.css';
import heart from '../../assets/heart.png';
import vector from '../../assets/vector.png';
import group from '../../assets/group.png';
import notification from '../../assets/nb.png';
import search_icon from '../../assets/search_icon.png'; 

const Next = () => {
  return (
    <div className='next'>
      <div className="next-menu">
        <div className='menu'>
        <li>Shop</li>
        <li>Promo</li>
        <li>About</li>
        <li>Blog</li>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search what you need" />
          <img src={search_icon} alt="Search Icon" className="search-icon" />
        </div>
     <div className="next-icon">
        <li><img src={heart} alt='Wishlist' /></li>
        <li><img src={vector} alt='Cart' /></li>
        <li><img src={group} alt='Profile' /></li>
        <li><img src={notification} alt='Notification' /></li>
        </div>
      </div>
    </div>
  );
}

export default Next;


