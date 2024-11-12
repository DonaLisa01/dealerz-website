
import './Footer.css'; 
import sm from '../../assets/sm.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className='square'></div>
      </div>
      <div className="footer-right">
        <div className="dealer-container">
          <h1 className="dealer-name">Dealerz</h1>
          <img className="dealer-image" src={sm} alt="Dealerz Image" /> 
        </div>
        <div className="footer-links">
          <p>Privacy Policy</p>
          <br/>
          <p>Terms and Conditions</p>
        </div>
        <br/>
        <br/>
        <br/>
        <p className="footer-rights">@2020 TanahAir Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

