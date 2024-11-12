import  { useState } from 'react';
import './Services.css';
import pp from '../../assets/ppp.jpg';

const slides = [
  {
    image: pp,
    title: 'Good Seller!',
    content: 'I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better',
    author: 'Anna Saraspova',
    role: 'Your Beloved Buyer'
  },
  
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="services">
      <div className="carousel-arrow" onClick={handlePrevSlide}>
        &#10094;
      </div>

      <div className="good">
        <div className="good-left">
          <div className="square"><img src={slides[currentSlide].image} alt="" /></div>
        </div>
        
        <div className="good-right">
          <div className="good-container">
          <br/>
            <br/>
            <h1 className="good-name">{slides[currentSlide].title}</h1>
          </div>
          <br/>
          <div className="good-links">
            <p>{slides[currentSlide].content}</p>
            <br/>
            <br/>
            <h5>{slides[currentSlide].author}</h5>
           
          
            <p className="ex">{slides[currentSlide].role}</p>
          </div>
        </div>
      </div>
      
      <div className="carousel-arrow" onClick={handleNextSlide}>
        &#10095; 
      </div>
    </div>
  );
};

export default Services;

