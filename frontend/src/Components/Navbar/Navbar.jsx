import './Navbar.css';
import call_icon from '../../assets/call_icon.png';
import sr_icon from '../../assets/sr_icon.png';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logo'>
        <h3>Dealerz.</h3>
      </div>
      <ul className="navbar-info">
        <li>
          <img src={call_icon} alt='Call Icon' />
          Call Center
        </li>
        <li>
          <img src={sr_icon} alt='Shipping and Returns Icon' />
          Shipping and Returns
        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;





