import styles from '@/styles/AppHeader.module.css'


export default function AppHeader(){
    return(
        <>
            <div className={styles.wrapper}>
                <input type="text" placeholder="Search Movie" />
                <a href='/'>
                    <h6> Stream Hive</h6>
                </a>
            </div>
        </>
    )
}