import styles from '../../../styles/Category.module.css'

const Content = ({innerText}) => {
    const onClick = () => {
        window.location.href = "https://google.com"
    }
    return(
        <div className={styles.menuRight} onClick={onClick}>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
            <span className={styles.content}>{innerText}</span>
        </div>
    )
}
export default Content;