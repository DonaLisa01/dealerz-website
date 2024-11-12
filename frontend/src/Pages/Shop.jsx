
import "./Shop.css";
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';
import e4 from '../assets/e4.png';

const Shop = () => {
  return (
    <div className="shop-container"> 
      <div className="shop-left">
        <img src={e1} alt='e1' />  
      </div>

      <div className="shop-right">
        <img src={e4} alt='e4' />
        <div className="shop-text">
          <img className="shop-right-img" src={e3} alt='e3' /> 
          <h1>Home Shopping,</h1>
          <h1> Your Choice!</h1>
        </div>
        <div className="shop-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="shop-button">
          <button>Find out More</button>
        </div>
        <img className="shop-botton-img" src={e2} alt='e2' />  
      </div>
    </div>
  );
}

export default Shop;
