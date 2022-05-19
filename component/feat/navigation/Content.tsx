import styles from '../../../styles/Category.module.css'

interface cProps{
    innerText : string;
}

const Content = ({innerText} : cProps) => {
    const onClick = () => {
        window.location.href = "https://google.com"
    }
    return(
        <div className={styles.menuRight}>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
            <span className={styles.content} onClick={onClick}>{innerText}</span>
        </div>
    )
}
export default Content;