import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const MovieAdd = () => {

    const [title,    setTitle]    = useState('');
    const [year,     setYear]     = useState('');
    const [language, setLanguage] = useState('');

    const redirect = useNavigate();

    const addMovie = async (event) => {
        event.preventDefault();
        const newMovie = { title, year, language };
        try {
            const response = await fetch('/movies', {
                method: 'post',
                body: JSON.stringify(newMovie),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`New Movie added to collection`);
                redirect("/moviesPage");
            } else {
                alert(`helpful adding message = ${response.status}`);
            }
        } catch (error) {
            alert(`helpful adding message = ${response.status}`);
        }
    };

    return (
        <>
        <h2>Add a movie</h2>
        <article>
        <p>Paragraph about this page.</p>
        <form id="" onSubmit={addMovie}>
        <table id="movies">
            <caption>Which movie are you adding?</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <label htmlFor="title">Movie title</label>
                    <input type="text" 
                    placeholder="Title of the movie" 
                    id="title"
                    value={title}
                    required
                    onChange={e => setTitle(e.target.value)} />
                    </td>

                    <td>
                    <label htmlFor="year">Year released</label>
                    <input 
                    type="text" 
                    placeholder="Year of the movie" 
                    id="year"
                    value={year}
                    required
                    onChange={e => setYear(e.target.value)} />
                    </td>

                    <td>
                    <label htmlFor="language">Movie language</label>
                    <input 
                    type="text" 
                    placeholder="Language of the movie" 
                    id="language"
                    value={language}
                    required
                    onChange={e => setLanguage(e.target.value)} />
                    </td>

                    <td>
                    <label htmlFor="submit">
                    <button type="submit" id="submit">Add Movie</button></label>
                    </td>

                </tr>

            </tbody>
        </table>
        </form>
        </article>
        </>

    )};


export default MovieAdd;