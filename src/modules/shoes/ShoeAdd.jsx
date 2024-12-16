import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const ShoeAdd = () => {

    const [shoeModel,    setModel]    = useState('');
    const [brand,     setBrand]     = useState('');
    const [durability, setDurability] = useState('');
    const [datePurchased, setDatePurchased] = useState('');

    const redirect = useNavigate();

    const addShoe = async (event) => {
        event.preventDefault();
        const newShoe = { shoeModel, brand, durability, datePurchased };
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/shoes/`, {
                method: 'post',
                body: JSON.stringify(newShoe),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201 || response.status === 200){
                alert(`Shoe review added to collection`);
                redirect("/shoesPage");
            } else {
                alert(`Error adding shoe= ${response.status}`);
            }
            
        } catch (error) {
            alert(`Database error = ${response.status}`);
        }
    };

    return (
        <>
        <h2>Add a review for a climbing shoe</h2>
        <article>
        <p>Add review of shoe.</p>
        <form id="" onSubmit={addShoe}>
        <table id="shoes">
            <caption></caption>
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Durability</th>
                    <th>DatePurchased</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    {/* <label htmlFor="shoeModel">Model</label> */}
                    <input type="text" 
                    placeholder="Model of the shoe" 
                    id="shoeModel"
                    value={shoeModel}
                    required
                    onChange={e => setModel(e.target.value)} />
                    </td>

                    <td>
                    {/* <label htmlFor="brand">Brand</label> */}
                    <input 
                    type="text" 
                    placeholder="Brand of the shoe" 
                    id="brand"
                    value={brand}
                    required
                    onChange={e => setBrand(e.target.value)} />
                    </td>

                    <td>
                    {/* <label htmlFor="durability">Durability</label> */}
                    <select id="durability" name="selectedNumber" required value={durability}  onChange={e => setDurability(e.target.value)} >
                        <option value="" disabled selected>Select a number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    
                    </td>

                    <td>
                    {/* <label htmlFor="datePurchased">Date Purchased</label> */}
                    <input 
                    type="date" 
                    placeholder="Date Purchased" 
                    id="datePurchased"
                    value={datePurchased}
                    required
                    onChange={e => setDatePurchased(e.target.value)} />
                    </td>


                    <td>
                    <label htmlFor="submit">
                    <button type="submit" id="submit">Add Shoe</button></label>
                    </td>

                </tr>

            </tbody>
        </table>
        </form>
        </article>
        </>

    )};


export default ShoeAdd;