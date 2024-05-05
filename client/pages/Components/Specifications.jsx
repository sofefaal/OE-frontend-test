const db = require("../../../server/db");

function Specification() {
  const { products } = db;

  return (
    <section className="spec-container">
      <h2>Specification</h2>
      {products.map((product) => {
        return (
          <table>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Item weight (g)</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td>Dimensions (cm)</td>
              <td>
                {product.height} x {product.width} x {product.length}
              </td>
            </tr>
            <tr>
              <td>Item Model number</td>
              <td>{product.model_code}</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>{product.colour}</td>
            </tr>
          </table>
        );
      })}
    </section>
  );
}

export default Specification;
