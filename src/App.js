import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

const API_URL =   'http://www.omdbapi.com/?i=tt3896198&apikey=fc010ea1'


const App = () =>{
    const [movies, setmovies] = useState([])
    const [searchTerm, setSearchTerm]  = useState('')

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();
    
        setmovies(data.Search);
    }  
    
    useEffect(() => {
        searchMovies('Spiderman')
    }, []); 

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt='search'
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className='container'>
                       {
                        movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))
                       }
                    </div>
                ) :(
                    <div>
                        <h2>No movies found</h2>
                    </div>
                ) 
            }
          
        </div> 
    )
}

export default App;