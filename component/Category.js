import { useState } from 'react'
import styles from '../styles/Category.module.css'

const Category = () =>{
    const [isClicked, setIsClicked] = useState(false);
    const [dropDownName, setDropDownName] = useState("");

    const onClick = () =>{
        setIsClicked(current => !current);
    }

    const onEnter = (e) => {
        setDropDownName(e.target.id);
    }

    const onLeave = () => {
        setDropDownName("");
    }

    return(
        <div className={styles.Category}>
            <div
                onClick={onClick}
                className={styles.navBtn}
            >
                카테고리
            </div>
            <div 
                className={styles.menuBox}
                onMouseLeave={onLeave}
            >
                {
                    isClicked === true ? 
                    <>
                    <div className={styles.menuLeft}>
                        <span 
                            className={dropDownName === "type" ? styles.hover : styles.dropDownMenu} 
                            id="type"
                            onMouseEnter={onEnter}
                        >
                            유형
                        </span>
                        <span 
                            className={dropDownName === "adjective" ? styles.hover : styles.dropDownMenu} 
                            id="adjective"
                            onMouseEnter={onEnter}
                        >
                            형용사
                        </span>
                        <span 
                            className={dropDownName === "genre" ? styles.hover : styles.dropDownMenu} 
                            id="genre"
                            onMouseEnter={onEnter}
                        >
                            장르
                        </span>
                        <span 
                            className={dropDownName === "extension" ? styles.hover : styles.dropDownMenu} 
                            id="extension"
                            onMouseEnter={onEnter}
                        >
                            확장자
                        </span>
                    </div>
                    </> :
                    null
                }
                {
                dropDownName === "" ?
                null
                :
                <div className={styles.menuRight}>
                    {dropDownName}
                </div>
            }
            </div>
        </div>
    )
}

export default Category;