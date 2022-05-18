import { useState } from 'react'
import Nav from './Nav'
import styles from '../../../styles/Category.module.css'
import SubNav from './SubNav'
import CatJson from '../../share/Category.json'
import Content from './Content'

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
            <Nav 
                onClick={onClick}
                nav="카테고리"
            />
            <div 
                className={styles.menuBox}
                onMouseLeave={onLeave}
            >
                {
                    isClicked === true ? 
                    <>
                    <div className={styles.menuLeft}>
                        {
                            CatJson.map((current)=>{
                                return(
                                    <SubNav
                                        key={current.id}
                                        dropDownName={dropDownName}
                                        onEnter={onEnter}
                                        nav={current.nav}
                                        id={current.id}
                                    />
                                )
                            })
                        }
                    </div>
                    </> :
                    null
                }
                {
                    dropDownName === "" ?
                        null
                        :
                        <Content 
                            innerText={dropDownName}
                        />
                }
            </div>
        </div>
    )
}

export default Category;