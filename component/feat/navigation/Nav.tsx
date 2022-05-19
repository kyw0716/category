import styled from 'styled-components';

interface nProps{
    onClick : React.MouseEventHandler<HTMLDivElement>;
    nav : string;
}

const StyledNav = styled.div`
    width: 150px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    background-color: #D94A4A;
`;

const Nav = ({onClick, nav} : nProps) => {
    return(
        <StyledNav onClick={onClick}>
            {nav}
        </StyledNav>
    )
}

export default Nav;