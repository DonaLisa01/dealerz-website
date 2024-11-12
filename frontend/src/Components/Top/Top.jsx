import { useState } from 'react';
import './Top.css';
import g from '../../assets/g.jpg';
import t from '../../assets/t.jpg';
import ggg from '../../assets/ggg.jpg';
import gggg from '../../assets/gggg.jpg';

const Top = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: g, title: 'Tracksuit Hyped', subtitle: 'Apple Cherry', price: '$400' },
    { src: ggg, title: 'Tracksuit Casual', subtitle: 'Grape Purple', price: '$450' },
    { src: gggg, title: 'Tracksuit Sporty', subtitle: 'Lime Green', price: '$420' },
    { src: t, title: 'Tracksuit Urban', subtitle: 'Ocean Blue', price: '$380' },
  ];

  const totalSlides = Math.ceil(images.length / 3);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="top-container">
      <div className="top-header">
        <br />
        <br />
        <h2>Top Items</h2>
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <br />
        <br />
      </div>

      <div className="top-wrapper">
        <button onClick={handlePrev} className="arrow-button left-arrow">❮</button>

        <div className="top">
          <div 
            className="top-itemt-container" 
            style={{ 
              display: 'flex', 
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            {images.map((image, index) => (
              <div className="top-itemt" key={index} style={{ flex: '1 0 33.33%' }}>
                <div className="itemt-image-container">
                  <img src={image.src} alt={image.title} className="itemt-image" />
                  <div className="itemt-details">
                    <div className="itemt-title">{image.title}</div>
                    <div className="itemt-subtitle">{image.subtitle}</div>
                    <div className="itemt-price">{image.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="arrow-button right-arrow">❯</button>
      </div>
    </div>
  );
};

export default Top;










