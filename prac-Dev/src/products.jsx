import react from "react"
import propsTypes from "prop-types"


function Products({Name, Price, Availability }) {
    return (
        <div className="products">
            <p className="productsList">
                <Products name={Name} price={Price} availability={Availability}/>
            </p>
        </div>
    )
    Products.prototype.Name = String
    Products.prototype.Price = Number
    Products.prototype.Availability = String
}
export default Products