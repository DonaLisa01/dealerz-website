import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2 className="description-title">Description</h2>
        <div className="description-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        <div className="reviews-section">
          <h3>Reviews (2)</h3>

          <div className="review">
            <div className="review-header">
              <div className="review-author">Alex Iwobi</div>
              <div className="review-rating">★★★★★</div>
            </div>
            <div className="review-date">2 March 2021 at 06:30 pm</div>

            <div className="review-images">
              <img src="path/to/image1.jpg" alt="Review Image 1" />
              <img src="path/to/image2.jpg" alt="Review Image 2" />
              <img src="path/to/image3.jpg" alt="Review Image 3" />
              <img src="path/to/image4.jpg" alt="Review Image 4" />
            </div>

            <p className="review-text">
              Thank you for the article that was made. It really provides insight and knowledge that I didn’t know before.
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <div className="review-author">Alex Iwobi</div>
              <div className="review-rating">★★★★★</div>
            </div>
            <div className="review-date">2 March 2021 at 06:30 pm</div>

            <div className="review-images">
              <img src="path/to/image1.jpg" alt="Review Image 1" />
              <img src="path/to/image2.jpg" alt="Review Image 2" />
              <img src="path/to/image3.jpg" alt="Review Image 3" />
              <img src="path/to/image4.jpg" alt="Review Image 4" />
            </div>

            <p className="review-text">
              Thank you for the article that was made. It really provides insight and knowledge that I didn’t know before.
            </p>
          </div>
        </div>
      </div>

      <div className="sidebart">
       
        
      </div>
    </div>
  );
};

export default ProductDetails;

