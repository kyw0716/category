import React, { useState } from 'react'
import Nav from './Nav'
import SubNav from './SubNav'
import CatJson from '../../share/Category.json'
import Content from './Content'
import styled from 'styled-components'

const StyledCategory = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
`;

const StyledMenuBox = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
`;

const StyledMenuLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 400px;
    background-color: #d77a7a;
    padding-top: 5px;
`;

const Category = () =>{
    const [isClicked, setIsClicked] = useState(false);
    const [dropDownName, setDropDownName] = useState("");

    const onClick = () =>{
        setIsClicked(current => !current);
    }

    const onEnter = (e : React.MouseEvent<HTMLDivElement>) => {
        setDropDownName((e.target as HTMLDivElement).id);
    }

    const onLeave = () => {
        setDropDownName("");
    }

    return(
        <StyledCategory>
            <Nav 
                onClick={onClick}
                nav="카테고리"
            />
            <StyledMenuBox onMouseLeave={onLeave}>
                {
                    isClicked === true ? 
                    <>
                    <StyledMenuLeft>
                        {
                            CatJson.map((current)=>{
                                return(
                                    <SubNav
                                        key={current.id}
                                        onEnter={onEnter}
                                        nav={current.nav}
                                        id={current.id}
                                    />
                                )
                            })
                        }
                    </StyledMenuLeft>
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
            </StyledMenuBox>
        </StyledCategory>
    )
}

export default Category;