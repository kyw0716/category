import styled from 'styled-components';

interface sProps{
    onEnter : React.MouseEventHandler<HTMLSpanElement>
    nav : string;
    id : string;
}

const StyledSpan = styled.span`
    width: inherit;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    background-color: #D94A4A;
    margin-bottom: 5px;
    
    &:hover{
        background-color: white;
    }
`;

const SubNav = ({onEnter, nav, id} : sProps) => {
    return(
        <StyledSpan id={id} onMouseEnter={onEnter}>
            {nav}
        </StyledSpan>
    );
}

export default SubNav;