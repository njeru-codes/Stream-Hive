import AppHeader from "@/components/AppHeader"
import NavBar from "@/components/NavBar"
import Popular from "@/components/Popular";
import styles from '@/styles/Home.module.css'
import Head from "next/head"
import { useContext, useEffect } from 'react';
import StateContext from '@/context/context';
import axios from 'axios';

export default function Home(){

  const { popular, setPopular } = useContext(StateContext);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const api_key='a4fca952945abe4fd8d1f64e46d9503a'
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
        const data = response.data.results.slice(0, 6).map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
          }
        });
        setPopular(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPopular();
  }, [setPopular]);
  console.log( popular)

  return(
    <>
      <Head>
          <title>Stream Hive</title>
      </Head>
      <main className={styles.wrapper}>
        <AppHeader />
        <NavBar />
        <Popular />
      </main>
      
    </>
  )
}