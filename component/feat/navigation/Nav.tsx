import styled from 'styled-components';

type nProps = {
    onHover : React.MouseEventHandler<HTMLDivElement>
    nav : string
}

const StyledNav = styled.div`
    width: 150px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    background-color: #D94A4A;
`;

const Nav = ({nav, onHover} : nProps) => {
    return(
        <StyledNav onMouseEnter={onHover}>
            {nav}
        </StyledNav>
    )
}

export default Nav;