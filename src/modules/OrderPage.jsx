import { useState} from 'react';

import OrderRow from "./OrderRow.jsx";

function OrderPage({ products }){
    const [total, setTotal] = useState(0); 

    return (
        <>
            <h2>Order Pet Product</h2>
            <article>
                    <p></p>
                    <table>
                        <caption>Order one product</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) =>
                                <OrderRow 
                                    product={product}
                                    key={i}
                                    total={total} 
                                    totalChange={setTotal}
                                    />)}
                            </tbody>
                    </table>
                    <p id="totalprice">
                                    Grand Total amounts to: {total.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
                                </p>
                <h3></h3>
                <p></p>
            </article>
        </>
    )
}
export default OrderPage;