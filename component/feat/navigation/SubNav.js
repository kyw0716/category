import styles from '../../../styles/Category.module.css'

const SubNav = ({dropDownName, onEnter, nav, id}) => {
    return(
        <span 
            className={dropDownName === `${id}` ? styles.hover : styles.dropDownMenu} 
            id={id}
            onMouseEnter={onEnter}
        >
            {nav}
        </span>
    );
}

export default SubNav;