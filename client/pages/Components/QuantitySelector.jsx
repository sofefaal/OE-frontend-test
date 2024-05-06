import { useState } from "react";
const db = require("../../../server/db");

function QuantitySelector({ addToBasket }) {

//this component is using useState, allows the user to select the quantity, it prevents the user to add 0 items into the basket
//handleAddToBasket is a event listener, once the user has clicked on the add to cart button, it will add the items into the basket 
//there is also logic added to the add to cart button, if there is less than 1 item, the button will remain to say "add to cart"

  const { products } = db;
  const [quantity, setQuantity] = useState(1);
  const [addedToBasket, setAddedToBasket] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToBasket = () => {
    if (quantity > 0) {
    addToBasket(quantity);
    setAddedToBasket(true)
    }
  };

 return (
   <section>
     {products.map((product) => (
       <div key={product.id} className="product-container">
         <div className="left-content">
          <p className="Qty">Qty</p>
         </div>
         <div className="right-content">
           <h2 className="price_tag">£{(product.price / 100).toFixed(2)}</h2>
           <div className="quantity-controls">
             <button className="quantity_button minus-disabled" onClick={decreaseQuantity}>
               -
             </button>
             <span>{quantity}</span>
             <button className="quantity_button " onClick={increaseQuantity}>
               +
             </button>
           </div>
         </div>


         <div className="add-to-button">
           <button className="add_button" onClick={handleAddToBasket}>
            {addedToBasket ? "Added to Basket" : "Add to cart"}
           </button>
         </div>
       </div>
     ))}
   </section>
 );
}

export default QuantitySelector;
