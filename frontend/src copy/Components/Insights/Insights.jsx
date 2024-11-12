import './Insights.css';
import aa from '../../assets/aa.jpg';
import aaa from '../../assets/aaa.jpg';
import aaaa from '../../assets/aaaa.jpg';
import aaaaa from '../../assets/aaaaa.jpg';
const Insights = () => {
  return (
    <div className="articles-section">
      <div className="header">
        <h2>Get Better Insights <br/> from Our Articles</h2>
        <a href="#" className="see-more">See more</a>
      </div>
      
      <div className="articles-grid">
        <div className="article-card">
          <div className="image-placeholder">
          <img src={aaaa} alt=""/>
          </div>
          <div className="content">
            <h3>Best Summer Outfit Style</h3>
            <p className="date">14 Feb - Luvina Style</p>
            <p className="description">
              Lorem ipsum has been the industry’s standard dummy text ever since the 1500s...
            </p>
            <a href="#" className="explore-more">Explore More</a>
          </div>
        </div>

        <div className="article-card">
          <div className="image-placeholder">
          <img src={aaa} alt=""/>
          </div>
          <div className="content">
            <h3>Summer Fashion Trends</h3>
            <p className="date">20 Mar - Fashion Daily</p>
            <p className="description">
              Discover the latest trends and styles to elevate your summer wardrobe...
            </p>
            <a href="#" className="explore-more">Explore More</a>
          </div>
        </div>

        
        <div className="article-card">
          <div className="image-placeholder">
            <img src={aa} alt=""/>
          </div>
          <div className="content">
            <h3>Summer Fashion Trends</h3>
            <p className="date">20 Mar - Fashion Daily</p>
            <p className="description">
              Discover the latest trends and styles to elevate your summer wardrobe...
            </p>
            <a href="#" className="explore-more">Explore More</a>
          </div>
        </div>

        
        <div className="article-card">
          <div className="image-placeholder">
          <img src={aaaaa} alt=""/>
          </div>
          <div className="content">
            <h3>Summer Fashion Trends</h3>
            <p className="date">20 Mar - Fashion Daily</p>
            <p className="description">
              Discover the latest trends and styles to elevate your summer wardrobe...
            </p>
            <a href="#" className="explore-more">Explore More</a>
          </div>
        </div>

      

      

      </div>
    </div>
  );
};

export default Insights;





