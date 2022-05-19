import styles from '../../../styles/Category.module.css'

interface nProps{
    onClick : React.MouseEventHandler<HTMLDivElement>;
    nav : string;
}

const Nav = ({onClick, nav} : nProps) => {
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