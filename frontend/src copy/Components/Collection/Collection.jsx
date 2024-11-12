import './Collection.css'

import Button from '../../assets/Button.png';
const Collection = () => {
    return (
      <div className="collection">
        <br/>
        <br/>
        <br/>
        <h2>Our Premium Collection</h2>
        <br/>
        <br/>
        <ul className="collection-menu">
          <li>All Products</li>
          <li>Coats & Jacket</li>
          <li>Dressed</li>
          <li>Playsuit</li>
          <li>Short</li>
          <li>Skirt</li>
          <li>T-Shirt</li>
        </ul>
        
        <div className="cards-container">
          <div className="card">
            <h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/>
          </div>
          <div className="card"><h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/></div>
          <div className="card"><h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/></div>
          <div className="card"><h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/></div>
          <div className="card"><h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/></div>
          <div className="card"><h6>Category Dress</h6>
            <h2>Tropical Suit</h2>
            <img src={Button} alt=""/></div>
        </div>
       <br/>
       <br/> 
        <button className="find-more">Find out More</button>
      </div>
    );
  };
  
  export default Collection;