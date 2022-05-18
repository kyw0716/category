import styles from '../../../styles/Category.module.css'

const Nav = ({onClick, nav}) => {
    return(
        <div
            onClick={onClick}
            className={styles.navBtn}
        >
            {nav}
        </div>
    )
}

export default Nav;