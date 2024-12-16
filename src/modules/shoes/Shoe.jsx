import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { TiDelete } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";


import React from 'react';

function Shoe({shoe, onEdit, onDelete}){
    return (
        <tr>
        <td>{shoe.shoeModel}</td> 
        <td>{shoe.brand}</td>
        <td>{shoe.durability}</td>
        <td>{new Date(shoe.datePurchased).toLocaleDateString()}</td>
        
       <td> <i> <TiDelete onClick={() => onDelete(shoe._id)} /> </i> </td>
       <td> <i> <CiEdit onClick={() => onEdit(shoe)} /> </i> </td> 
       <td></td>
        </tr>
            );
}
export default Shoe;