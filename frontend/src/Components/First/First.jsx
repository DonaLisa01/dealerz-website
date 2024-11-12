import "./First.css";
import e1 from '../../assets/e1.png';
import e2 from '../../assets/e2.png';
import e3 from '../../assets/e3.png';
import e4 from '../../assets/e4.png';
import comp from '../../assets/comp.png';

const First = () => {
  return (
    <div className="first">
      <div className="first-left">
        <img src={e1} alt='e1' />
      </div>

      <div className="first-right">
        <img src={e4} alt='e4' />
        <div>
          <img className="right-img" src={e3} alt='e3' />
          <h1>Your Premium Sound, Unplugged!</h1>
        </div>
        <div className="text-with-image">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img className="first-right_imgc1" src={comp} alt='comp' />
        </div>
        <div>
          <button className="fb">Find out More</button>
        </div>
        <img className="first-right_img1" src={e2} alt='e2' />
      </div>
    </div>
  );
};

export default First;

