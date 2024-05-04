import BasketIcon from "./Components/BasketIcon"
import Description from "./Components/Description"
import Header from "./Components/Header"
import ProductImage from "./Components/ProductImage"
import QuantitySelector from "./Components/QuantitySelector"
import Specification from "./Components/Specifications"

function Product() {
  return ( 
  <div>
    <Header />
    <BasketIcon />
    <ProductImage />
    <QuantitySelector />
    <Description />
    <Specification />
  </div>
  )
}

export default Product
