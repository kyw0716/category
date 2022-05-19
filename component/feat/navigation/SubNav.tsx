import styles from '../../../styles/Category.module.css'

interface sProps{
    dropDownName : string;
    onEnter : React.MouseEventHandler<HTMLSpanElement>
    nav : string;
    id : string;
}

const SubNav = ({dropDownName, onEnter, nav, id} : sProps) => {
    return(
        <span 
            className={dropDownName === id ? styles.hover : styles.dropDownMenu} 
            id={id}
            onMouseEnter={onEnter}
        >
            {nav}
        </span>
    );
}

export default SubNav;