
import success from '../../assets/success.jpg';

import "./Story.css";


const Story = () => {
  return (
    <div className="story">
      <div className="story-left">
        <div className="box">
        <img src={success} alt="" />
        </div>
      </div>

      <div className="story-right">
        <div>
          <h1>Story about</h1>
          <h1>Our Brand</h1>
        </div>
        <div>
          <p>
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company. Develop a website by finding a product
            identity that has value and branding to become a characteristic of a
            company. We will also facilitate the business marketing of these
            products with our SEO experts so that they become a ready-to-use
            website and help sell a product from the company.
          </p>
        </div>
        <div>
          <br/>
         
          <h6>Read full Story</h6>
        </div>
      </div>
    </div>
  );
};

export default Story;