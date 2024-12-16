import {React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import ShoeList from './ShoeList';
import { Link } from 'react-router-dom';


function ShoesPage( {setShoe} ){

    // Defines a variable to redirect from a Create or Update page:
    const redirect = useNavigate();

    // Defines a variable to set state and update state for all the movies in the collection:
    const [shoes, setShoes] = useState([]);

    // Retrieves/loads all the movies in the collection, so they are visible. 
    const loadShoes = async () => {
        const response = await fetch('/shoes');
        const shoes = await response.json();
        setShoes(shoes);
         }
    
    // Updates the state of a single movie when it changes:
    const onEditShoe = async shoe => {
        setShoe(shoe);
        redirect("/updateShoe");
    }

    // When adding a new shoe
    const onAddShoe = async () =>
        { redirect('/createShoe')}

    // Deletes a movie when requested, and provides an error message if not.
    const onDeleteShoe = async _id => {
        const response = await fetch(`/shoes/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/shoes');
             const shoes = await getResponse.json();
             setShoes(shoes);
        } else {
             console.error(`helpful deletion message = ${_id}, status code = 
             ${response.status}`)
          }
      }
    
    // Incorporates useEffect when loading the movies:  
    useEffect(() => {
        loadShoes();
     }, []);


    return (
        <>
            <h2>Shoes</h2>
             <article>
                <h3></h3>

                <ShoeList
                    shoes={shoes}
                    onEdit={onEditShoe}
                    onDelete={onDeleteShoe}
                    onAdd={onAddShoe}
                    />
            </article>
        </>
    )
}
export default ShoesPage;