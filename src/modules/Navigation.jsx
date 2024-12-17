import { Link } from 'react-router-dom';
// import '../index.css';


function Navigation(){
    return (
        <>
        <nav> 
            <Link to="/" className="top_nav">Home</Link>
            {/* <Link to="/topics"className="top_nav">Topics</Link> */}
            <Link to="/order"className="top_nav">Order</Link>
            {/* <Link to="/gallery"className="top_nav">Gallery</Link> */}
            {/* <Link to="/contact"className="top_nav">Contact</Link> */}
            {/* <Link to="/staff"className="top_nav">Staff</Link> */}
            {/* <Link to="/moviesPage"className="top_nav">Movies</Link> */}
            <Link to="/shoesPage"className="top_nav">Shoes</Link>

        </nav>        
        </>
    )
}
export default Navigation;