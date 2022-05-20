import React, { useEffect } from 'react';
import styled from 'styled-components';
import menu from '../../share/menu.json'

interface cProps{
    innerText : string;
}

const StyledContentBox = styled.div`
    width: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const StyledContent = styled.span`
    padding: 15px 20px;
    &:hover{
        background-color: rgb(210, 210, 210);
    }
`;

const Content = ({innerText} : cProps) => {

    const onClick = (e : React.MouseEvent<HTMLDivElement>) => {
        alert((e.target as HTMLDivElement).id);
    }

    return(
        <StyledContentBox>
            {
                innerText === "type" ? menu.type.map((current)=>{
                    return(
                        <StyledContent id={current.id} onClick={onClick}>{current.name}</StyledContent>
                    )
                }) : null
            }
            {
                innerText === "adjective" ? menu.adjective.map((current)=>{
                    return(
                        <StyledContent id={current.id} onClick={onClick}>{current.name}</StyledContent>
                    )
                }) : null
            }
            {
                innerText === "genre" ? menu.genre.map((current)=>{
                    return(
                        <StyledContent id={current.id} onClick={onClick}>{current.name}</StyledContent>
                    )
                }) : null
            }
            {
                innerText === "extension" ? menu.extension.map((current)=>{
                    return(
                        <StyledContent id={current.id} onClick={onClick}>{current.name}</StyledContent>
                    )
                }) : null
            }
        </StyledContentBox>
    )
}
export default Content;