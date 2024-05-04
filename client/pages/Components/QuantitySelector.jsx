import { useState } from "react";
const db = require("../../../server/db");

function QuantitySelector({ addToBasket }) {
  const { products } = db;
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToBasket = () => {
    addToBasket(quantity);
  };

  return (
    <section className="quantity-selector">
      <div className="left-content">
        <h2 className="price_tag">£{products.price}</h2>
      </div>
      <div className="right-content">
        <p>Qty</p>
        <div className="quantity-controls">
          <button className="quantity_button" onClick={decreaseQuantity}>-</button>
           <span>{quantity}</span>
           <button className="quantity_button" onClick={increaseQuantity}>+</button>
        </div>
        <button className="add_button" onClick={handleAddToBasket}>
          <b>Add to cart</b>
        </button>
      </div>
    </section>
  );
}

export default QuantitySelector;
