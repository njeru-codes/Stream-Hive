import styles from '@/styles/Popular.module.css'
import { useContext, useEffect } from 'react';
import StateContext from '@/context/context';
import WatchItem from "@/components/WatchItem"

export default function Popular(){
    const { popular, setPopular } = useContext(StateContext);
    return(
        <div className={styles.wrapper}>
            {popular && popular.map(movie => (
              <WatchItem movie={movie} />
            ))}
        </div>
    )
}