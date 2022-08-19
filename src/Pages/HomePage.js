import React from 'react'
import MovieList from '../Components/MovieList';
import AddMovie from '../Components/AddMovie';
import  {Filtre}  from '../Components/Filter';
import  {  useState } from "react";

const HomePage = ({data}) => {
    const [movies, setMovies]=useState([...data])
    const addMovie=(movie)=>{
      setMovies([...movies,movie])
    }
    
    const [search,setSearch]= useState('')
    const [rate,setRate]= useState(0)

  return (
    <div>

<AddMovie Add={addMovie}></AddMovie>  
<Filtre setSearch={setSearch} setRate={setRate}  rate={rate}/>
<MovieList movieList={movies.filter(el=> el.title.trim().toLowerCase().includes(search.toLowerCase().trim()) && el.rating >= rate)}/> 

    </div>
  )
}

export default HomePage