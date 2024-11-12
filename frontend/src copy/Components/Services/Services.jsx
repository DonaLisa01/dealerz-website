import './Services.css';
import al from '../../assets/al.png';
import ar from '../../assets/ar.png';


const Services = () => {
  return (
    <div className="services">
      <div className="carousel-arrowleft-arrow">
        <img src={al} alt=""/>
      </div>
      
      <div className="good">
        <div className="good-left">
          <div className="square"></div>
        </div>
        
        <div className="good-right">
          <div className="good-container">
            <br/>
            <br/>
            <br/>
            <h1 className="good-name">Good Seller!</h1>
          </div>
          <br/>
          <br/>
          <div className="good-links">
            <p>
              I am very happy with the services provided, it is very helpful, starting
              from the insight that the company gave from the start that I did not
              understand what it was so I got knowledge and made my website
              look better
            </p>
            <br/>
            <br/>
            <h5>Anna Saraspova</h5>
            <br/>
            <br/>
            <p className="ex">Your Beloved Buyer</p>
          </div>
        </div>
      </div>
      
      <div className="carousel-arrowright-arrow">
      <img src={ar} alt=""/>
      </div>
    </div>
  );
};

export default Services;
