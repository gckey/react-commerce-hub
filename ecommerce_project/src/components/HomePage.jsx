import products from '../../backend/data/products';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <title>Ecommerce Project</title>
      <Header />
      <div className="home-page">
        <div className="products-grid">
          {/* Iterate over the products array. For every 'product' object in the list, return a JSX block. */}
          {products.map((product) => {
            // console.log(products);
            return (
              // the 'key' prop is required by React for lists to track changes. We use the unique product id.
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image"
                    src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img className="product-rating-stars"
                  //Uses template literals to dynamically load the star rating image based on the product data.
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );

          })}

        </div>
      </div>
    </>

  );

};

export default HomePage;