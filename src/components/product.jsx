import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product() {

    function add() {
        console.log("adding to cart");
    }

    return (
        <div className="product">
            <img src="https://picsum.photos/250/200" alt="" />
            <h3>I'm a product</h3>

            <label>$total</label>
            <label>$price</label>

            <QuantityPicker />

            <button className='btn btn-sm btn-success' onClick={add}>Add</button>
        </div>
    );
}

export default Product;


/**
 * create an add button
 * when the user clicks on it it should call and add fn
 * and console log a message
 */