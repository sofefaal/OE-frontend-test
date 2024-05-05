import BasketIcon from "./Components/BasketIcon"
import Description from "./Components/Description"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProductImage from "./Components/ProductImage"
import QuantitySelector from "./Components/QuantitySelector"
import Specification from "./Components/Specifications"
import {useState} from "react"

function Product() {

  const [totalQuantity, setTotalQuantity] = useState(0)

  const updateTotalQuantity = (newQuantity) => {
    setTotalQuantity(totalQuantity + newQuantity)
  }

  return ( 
  <div className="content">
    <Header />
    <BasketIcon quantity={totalQuantity}/>
    <ProductImage />
    <QuantitySelector addToBasket={updateTotalQuantity}/>
    <Description />
    <Specification />
    <Footer />
  </div>
  )
}

export default Product
