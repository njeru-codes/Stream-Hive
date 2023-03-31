import '@/styles/globals.css'
import React, { useState } from 'react';
import StateContext from '@/context/context';

export default function App({ Component, pageProps }){

  const [popular, setPopular] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  
  return (
    <StateContext.Provider value={{ popular, setPopular, popularMovies, setPopularMovies, popularSeries, setPopularSeries, movies, setMovies, series, setSeries }}>
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}
