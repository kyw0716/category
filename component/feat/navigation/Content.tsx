import styled from 'styled-components';

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
    const onClick = () => {
        window.location.href = "https://google.com"
    }
    return(
        <StyledContentBox>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
            <StyledContent onClick={onClick}>{innerText}</StyledContent>
        </StyledContentBox>
    )
}
export default Content;