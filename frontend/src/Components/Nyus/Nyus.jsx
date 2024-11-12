import './Nyus.css';
import bn from '../../assets/bb.png';

const Nyus = () => {
  return (
    <div className="N">
      <div className='nn'>
        <h2>Join Our Newsletters</h2>
        <br/>
        <p>Leverage agile frameworks to provide a robust synopsis for high-level overviews. 
          Iterative approaches to corporate strategy foster innovation.</p>
        <br/>
        <div className="mailt">
          <input type="text" placeholder="Insert your email here" />
          <img src={bn} alt="Search Icon" className="bn" />
        </div>
      </div>
    </div>
  );
};

export default Nyus;

