const db = require("../../../server/db")

function ProductImage() {
    const {products} = db
    // mapping through the db api, to retrieve the products data and display it on the webpage. 
    return(
        <section>
            {products.map((product) => {
                return (
                    <div>
                      <img
                        src={product.img_url}
                        alt={product.description}
                      ></img>
                      <h1 className="product_title">{product.name}</h1>
                      <p>
                        {product.power} // Packet of {product.quantity}
                      </p>  
                    </div>
                );
            })}
        </section>
    )

}

export default ProductImage