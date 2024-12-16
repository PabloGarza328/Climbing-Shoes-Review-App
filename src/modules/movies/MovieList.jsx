import React from 'react';
import Movie from './Movie.jsx';

function MovieList({ movies, onDelete, onEdit}) {
    return (
        <>
        <table id="movies">
        <caption>Add and Edit Movies</caption>
        <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Language</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {movies.map((movie, i) => 
                <Movie 
                    movie={movie} 
                    onDelete={onDelete}
                    onEdit={onEdit} 
                    key={i}
                />)}
        </tbody>
        </table>       
        </>
        
    )
}
export default MovieList;