import styles from '@/styles/NavBar.module.css'


export default function NavBar(){
    return(
        <>
            <div className={styles.wrapper}>
                <a href='/'>Browse</a>
                <a href='/movies'>Movies</a>
                <a href='/series'>Series</a>
            </div>
        </>
    )
}