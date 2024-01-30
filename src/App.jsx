import React from 'react'
import Header from './components/Header/Header'
import Movie from './components/Movie/Movie'
import moviejson from './movies.json'
import './App.css'
function App() {

  return (
    <>
      <Header/>
      <div className='card-container'>

        {
        
          moviejson.map((movie,index)=>{
            return(
            <Movie key = {index} Title = {movie.Title} Year = {movie.Year} Runtime = {movie.Runtime} Poster = {movie.Poster}/>
            )
          })
          
        }
          </div>
    </>
  )
}

export default App
