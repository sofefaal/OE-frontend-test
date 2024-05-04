const db = require("../../../server/db");

function Specification() {
  const { products } = db;

  return (
    <section>
      <h2>Specification</h2>
      {products.map((product) => {
        return (
          <div className="spec_container">
            <div className="row">
              <div className="cell">Brand</div>
              <div className="cell2">{product.brand}</div>
            </div>
            <div className="row">
              <div className="cell">Item weight (g)</div>
              <div className="cell2">{product.weight}</div>
            </div>
            <div className="row">
              <div className="cell">Dimensions (cm)</div>
              <div className="cell2">{product.height} x {product.width} x {product.length} </div>
            </div>
            <div className="row">
                <div className="cell">Item Model number</div>
                <div className="cell2">{product.model_code}</div>
            </div>
            <div className="row">
                <div className="cell">Colour</div>
                <div className="cell2">{product.colour}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Specification;
