import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const MovieEdit = ( { movieToEdit } ) => {
    const [title, setTitle]       = useState(movieToEdit.title);
    const [year, setYear] = useState(movieToEdit.year);
    const [language, setLanguage] = useState(movieToEdit.language);

    const redirect = useNavigate();

    const editMovie = async () => {
        const response = await fetch(`/movies/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/moviesPage");
    };

    return (
       <>
        <h2>Edit a movie</h2>
        <article>
        <p>Paragraph about this page.</p>
        <table>
            <caption>Edit this Movie:</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                <td>
                <label htmlFor="title"></label>
                <input type="text" placeholder="Title of the movie" id="title"
                value={title}
                onChange={e => setTitle(e.target.value)} 
                />
                </td>
                <td>
                <label htmlFor="year"></label>
                <input type="text" placeholder="Year of the movie" id="year"
                value={year}
                onChange={e => setYear(e.target.value)} 
                />
                </td>
                <td>
                <label htmlFor="language"></label>
                <input type="text" placeholder="Year of the movie" id="language"
                value={language}
                onChange={e => setLanguage(e.target.value)} 
                />
                </td>
                <td>
                <label htmlFor="submit">
                <button type="submit" id="submit" onClick={editMovie}>Save Edit</button></label>
                </td>
            </tbody>
        </table>
        </article>
        </>
    )};

export default MovieEdit;