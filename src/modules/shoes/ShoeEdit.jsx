import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const ShoeEdit = ( { shoeToEdit } ) => {
    const [shoeModel, setModel]       = useState(shoeToEdit.shoeModel);
    const [brand, setBrand] = useState(shoeToEdit.brand);
    const [durability, setDurability] = useState(shoeToEdit.durability);
    const [datePurchased, setDatePurchased] = useState(shoeToEdit.datePurchased);

    const redirect = useNavigate();

    const editShoe = async () => {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/shoes/${shoeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                shoeModel: shoeModel, 
                brand: brand,
                durability: durability, 
                datePurchased: datePurchased
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully update shoe`);
        } else {
            const errMessage = await response.json();
            alert(`error updating shoe ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ShoesPage");
    };

    return (
       <>
        <h2>Edit a shoe review</h2>
        <article>
        <p>Feel free to update information about a shoe.</p>
        <table>
            <caption>Edit this Shoe:</caption>
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Durability</th>
                    <th>Date Purchased (Month/Day/Year)</th>
                </tr>
            </thead>
            <tbody>
                <td>
                <label htmlFor="shoeModel"></label>
                <input type="text" placeholder="Shoe Model" id="shoeModel"
                value={shoeModel}
                onChange={e => setModel(e.target.value)} 
                />
                </td>
                <td>
                <label htmlFor="brand"></label>
                <input type="text" placeholder="Shoe Brand" id="brand"
                value={brand}
                onChange={e => setBrand(e.target.value)} 
                />
                </td>
                <td>
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
                <label htmlFor="datePurchased"></label>
                <input type="date" placeholder="Date Purchased" id="language"
                value={datePurchased}
                onChange={e => setDatePurchased(e.target.value)} 
                />
                </td>
                <td>
                <label htmlFor="submit">
                <button type="submit" id="submit" onClick={editShoe}>Save Changes</button></label>
                </td>
            </tbody>
        </table>
        </article>
        </>
    )};

export default ShoeEdit;