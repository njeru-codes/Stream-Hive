import styles from '@/styles/WatchItem.module.css'

export default function WatchItem(props){

    return(
        <div className={styles.wrapper}>
            <img src={`https://image.tmdb.org/t/p/w154/${props.movie.poster_path}`} alt={'s'}/>
            <h6> {props.movie.title} </h6>
        </div>
    )
}