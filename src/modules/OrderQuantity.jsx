import { useState} from 'react';
import { GoChevronDown, GoPlus } from 'react-icons/go';

function OrderQuantity( { quantity, whenQuantityChange, total, totalChange, product }){
    // const [quantity, setQuantity] = useState(0);
    
    const increment = () => {
        if (quantity === 10){
            whenQuantityChange(10)
        } else {
            whenQuantityChange(quantity + 1) 
            totalChange(total + product.price)       
        }
    }

    const decrement = () => {
        if (quantity === 0){
            whenQuantityChange(0)
        } else {
            whenQuantityChange(quantity - 1)
            totalChange(total - product.price)       

        }
    };
    return (
        <div class='clicker'>
            <i><GoChevronDown onClick={decrement}/></i>
            <span id="quantity">{quantity}</span>
            <i><GoPlus onClick={increment} /></i>
        </div>
    );
}
export default OrderQuantity;