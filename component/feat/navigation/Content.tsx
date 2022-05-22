import styled from 'styled-components';
import {menu} from '../../share/menu';

interface cProps{
    innerText : keyof typeof menu;
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
                menu[innerText].map((current) => 
                <StyledContent key={current.id} id={current.id} onClick={onClick}>{current.name}</StyledContent>
                )
            }
        </StyledContentBox>
    )
}
export default Content;