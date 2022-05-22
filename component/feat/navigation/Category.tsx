import React, { useState } from 'react'
import Nav from './Nav'
import SubNav from './SubNav'
import CatJson from '../../share/Category.json'
import Content from './Content'
import styled from 'styled-components'
import { menu } from '../../share/menu'

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
    const [isHovered, setIsHovered] = useState(false);
    const [dropDownName, setDropDownName] = useState("");

    const CategoryButtonOnHover = () => {
        setDropDownName("type");
        setIsHovered(true);
    }

    const onEnter = (e : React.MouseEvent<HTMLDivElement>) => {
        setDropDownName((e.target as HTMLDivElement).id);
    }

    const onLeave = () => {
        setDropDownName("");
        setIsHovered(false);
    }

    return(
        <StyledCategory>
            <Nav 
                onHover={CategoryButtonOnHover}
                nav="카테고리"
            />
            <StyledMenuBox onMouseLeave={onLeave}>
                {
                    isHovered &&
                    <>
                    <StyledMenuLeft>
                        {
                            CatJson.map(current=>
                                    <SubNav
                                        key={current.id}
                                        onEnter={onEnter}
                                        nav={current.nav}
                                        id={current.id}
                                        dropDownName={dropDownName}
                                    />
                            )
                        }
                    </StyledMenuLeft>
                    </>
                }
                {
                    dropDownName === "" ||
                        <Content 
                            innerText={dropDownName as keyof typeof menu}
                        />
                }
            </StyledMenuBox>
        </StyledCategory>
    )
}

export default Category;