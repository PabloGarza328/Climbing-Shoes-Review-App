
import { useState} from 'react';
import OrderQuantity from './OrderQuantity.jsx'


function ObtainQuantity(product) {
          return <OrderQuantity product={product}/>
        }
    
function ObtainSubtotal (quantity, price) {
        const quantityInt =  Array.from(quantity).filter(quantity => quantity.tagName === 'span');
        return (quantityInt * price)

}


function OrderRow({ product, total, totalChange }) {
    const [quantity, setQuantity] = useState(0); 
    const subtotal = quantity * product.price;

    // totalChange(subtotal)

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}</td>
            <td><OrderQuantity quantity={quantity} whenQuantityChange={setQuantity} total={total} totalChange={totalChange} product ={product}/></td>
            <td>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })} </td>
        </tr>
        
    );
}

export default OrderRow;