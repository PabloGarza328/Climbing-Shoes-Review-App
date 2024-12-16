import {React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieList from './MovieList';
import { Link } from 'react-router-dom';


function MoviesPage( {setMovie} ){

    // Defines a variable to redirect from a Create or Update page:
    const redirect = useNavigate();

    // Defines a variable to set state and update state for all the movies in the collection:
    const [movies, setMovies] = useState([]);

    // Retrieves/loads all the movies in the collection, so they are visible. 
    const loadMovies = async () => {
        const response = await fetch('/movies');
        const movies = await response.json();
        setMovies(movies);
         }
    
    // Updates the state of a single movie when it changes:
    const onEditMovie = async movie => {
        setMovie(movie);
        redirect("/update");
    }

    // Deletes a movie when requested, and provides an error message if not.
    const onDeleteMovie = async _id => {
        const response = await fetch(`/movies/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/movies');
             const movies = await getResponse.json();
             setMovies(movies);
        } else {
             console.error(`helpful deletion message = ${_id}, status code = 
             ${response.status}`)
          }
      }
    
    // Incorporates useEffect when loading the movies:  
    useEffect(() => {
        loadMovies();
     }, []);


    return (
        <>
            <h2>Movies</h2>
             <article>
                <h3></h3>

                <Link to="/create">Add Movie</Link>

                <MovieList
                    movies={movies}
                    onEdit={onEditMovie}
                    onDelete={onDeleteMovie}/>
            </article>
        </>
    )
}
export default MoviesPage;