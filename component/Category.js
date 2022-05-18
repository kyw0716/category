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
        <div 
            className={styles.menuBox}
        >
            <div className={styles.menuLeft}>
                <div
                    onClick={onClick}
                >
                    카테고리
                </div>
                {
                    isClicked === true ? 
                    <>
                    <div className={styles.dropDownMenus}>
                        <span 
                            className={styles.dropDownMenu} 
                            id="type"
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            유형
                        </span>
                        <span 
                            className={styles.dropDownMenu} 
                            id="adjective"
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            형용사
                        </span>
                        <span 
                            className={styles.dropDownMenu} 
                            id="genre"
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            장르
                        </span>
                        <span 
                            className={styles.dropDownMenu} 
                            id="extension"
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            확장자
                        </span>
                    </div>
                    </> :
                    null
                }
            </div>
            {
                dropDownName === "" ?
                null
                :
                <div className={styles.menuRight}>
                    {dropDownName}
                </div>
            }
        </div>
    )
}

export default Category;