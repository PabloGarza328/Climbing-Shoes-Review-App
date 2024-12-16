import React from 'react';
import Shoe from './Shoe.jsx';
import { CiEdit } from "react-icons/ci";
import { MdAddToPhotos } from "react-icons/md";



function ShoeList({ shoes, onDelete, onEdit, onAdd}) {
    return (
        <>
        <table id="shoes">
        <caption>Add or Edit Climbing Shoe Reviews</caption>
        <thead>
            <tr>
                <th>Model</th>
                <th>Brand</th>
                <th>Durability</th>
                <th>Date Purchased</th>
                <th>Delete</th>
                <th>Edit</th>
                <th> <i><MdAddToPhotos onClick={() => onAdd()}/></i></th>
                
            </tr>
        </thead>
        <tbody>
            {shoes.map((shoe, i) => 
                <Shoe 
                    shoe={shoe} 
                    onDelete={onDelete}
                    onEdit={onEdit} 
                    key={i}
                />)}
        </tbody>
        </table>       
        </>
        
    )
}
export default ShoeList;