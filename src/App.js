import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Ticket from './components/Ticket';
import Events from './components/Events';
import LatestMovies from './components/LatestMovies';
import UpComingMovies from './components/UpComingMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter >
    <div>
      <nav class="navbar navbar-expand-lg" style={{background:'#702ff8',}}>
        <div class="container">
          <a class="navbar-brand" href="/" style={{color:'#fff', fontWeight:'bold'}}>Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/latest" style={{color:'#fff', fontWeight:'bold'}}>Latest Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/upcomingmovies" style={{color:'#fff', fontWeight:'bold'}}>Upcoming Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/events" style={{color:'#fff', fontWeight:'bold'}}>Nearby Events</a>
              </li>
            </ul>
            <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search"/>
              </div>
            </ul>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route 
        path='/'
        element={<Home />}/>

        <Route 
        path='/booking'
        element={<Booking />}/>

        <Route 
        path='/ticket'
        element={<Ticket />}/>

        <Route 
        path='/events'
        element={<Events />}/>

        <Route 
        path='/latest'
        element={<LatestMovies />}/>

       <Route 
        path='/upcomingmovies'
        element={<UpComingMovies />}/>

        <Route 
        path='/movie-details/:id'
        element={<MovieDetails />}/>

        <Route 
         path='*'
         element={<h1>404</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
