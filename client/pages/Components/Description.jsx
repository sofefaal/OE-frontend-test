const db = require("../../../server/db");

function Description() {
  const { products } = db;

  return (

    <section className="description-container full-bleed">
      <h2 className="desc-title">Description</h2>
      {products.map((product) => {
        return <p className="desc-text"key={product.id}>{product.description}</p>;
      })}
    </section>
    
  );
}

export default Description
