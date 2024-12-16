import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'


// Import Pages
import HomePage   from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import StaffPage from './modules/StaffPage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import Navigation from './modules/Navigation.jsx';
import ContactPage from './modules/ContactPage.jsx';
import Counter from './modules/counter.jsx'

// import MoviesPage from './modules/movies/MoviesPage.jsx';
// import MovieAdd from './modules/movies/MovieAdd.jsx';
// import MovieEdit from './modules/movies/MovieEdit.jsx';

import ShoesPage from './modules/shoes/ShoesPage.jsx';
import ShoeAdd from './modules/shoes/ShoeAdd.jsx';
import ShoeEdit from './modules/shoes/ShoeEdit.jsx';


import { GiMountainClimbing } from "react-icons/gi";


import products from './data/products.js';


function App() {
  const [shoe, setShoes] = useState([]);



  return (
    <>
    <header>
      <h1>Pablo <GiMountainClimbing /> Garza </h1>
    </header>
    <Router>
        <Navigation/>
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    <Route path="/order" element={<OrderPage products={products}/>}></Route>
                    <Route path="/staff" element={<StaffPage />}></Route>
                    <Route path="/topics" element={<TopicsPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>   
                    
                    <Route path="/shoesPage" element={<ShoesPage setShoe={setShoes}/>}></Route>
                    <Route path="/createShoe" element={<ShoeAdd />}></Route>
                    <Route path="/updateShoe" element={<ShoeEdit shoeToEdit={shoe} />}></Route>

                    {/* <Route path="/moviesPage" element={<MoviesPage setMovie={setMovie}/>}></Route>
                    <Route path="/create" element={<MovieAdd />}></Route>
                    <Route path="/update" element={<MovieEdit movieToEdit={movie} />}></Route> */}
                    
                </Routes>
            </section>
        </main>
    </Router>
    <footer>
      <p id="footer_trademark">&copy; {new Date().getFullYear()}  Pablo Garza</p>
    </footer> 
    </>
  )
}

export default App

