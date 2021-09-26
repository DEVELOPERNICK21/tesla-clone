import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const[burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a href="#" >
                <img src="./images/logo.svg" alt="Tesla LOGO SVG" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomIcon onClick={() =>setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Cyber Truck</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;


const Container = styled.div`
min-height: 60px;
position: fixed;
top: 0;
left: 0;
right: 0;
display:flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
z-index: 1;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    
    @media (max-width: 768px) {
        display: none
    }
    
    `
const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    `

const CustomIcon = styled(MenuIcon)`
 cursor: pointer;
 `

const BurgerNav = styled.div`
    z-index: 16;
    background-color: #fff;
    width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 20px;
    list-style: none;
    transform: ${props => props.show ? "translateX(0%)" : "translateX(100%)"};
    transition: .2s  ;
    li{
        padding: 15px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
        width: 100%;
        display: flex;
        a{
            font-weight: 600;
        }
    }
    
    `

const CloseWrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`


    `
