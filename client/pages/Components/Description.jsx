const db = require("../../../server/db");

function Description() {
  const { products } = db;

  return (
    <section>
      <h2>Description</h2>
      {products.map((product) => {
        return <p>{product.description}</p>;
      })}
    </section>
  );
}

export default Description
