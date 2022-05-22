import styled from 'styled-components';

type sProps = {
    onEnter : React.MouseEventHandler<HTMLSpanElement>
    nav : string
    id : string
    dropDownName : string
}

const StyledSpan = styled.span`
    width: inherit;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    background-color: #D94A4A;
    margin-bottom: 5px;
`;

const StyledSpanHover = styled.span`
    width: inherit;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    background-color: white;    
    margin-bottom: 5px;
`

const SubNav = ({onEnter, nav, id, dropDownName} : sProps) => {
    return(
        <>
        {
            dropDownName === id ?
            <StyledSpanHover id={id} onMouseEnter={onEnter}>
                {nav}
            </StyledSpanHover>
            :
            <StyledSpan id={id} onMouseEnter={onEnter}>
                {nav}
            </StyledSpan>
        }
        </>
    );
}

export default SubNav;