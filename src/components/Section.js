import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,discription,leftButton,rightButton,backgroudImage}) {
    // console.log(title,discription,leftButton,rightButton);
    return (
        <Wrap bgImage={backgroudImage}>
        <Fade bottom >
            <ItemText>
                <h1>{title}</h1>
                <p>{discription}</p>
            </ItemText>
        </Fade>
            <Buttons>
            <Fade bottom >
                <ButtonGroup>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                    {rightButton && 
                        <RightButton>
                        {rightButton}
                    </RightButton>

                    }
                </ButtonGroup>
                </Fade>
                <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-color: orange;
background-size: cover ;
background-position: center;
background-image: url("./images/model-s.jpg");
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:${props=> `url("./images/${props.bgImage}")`};
`

const Buttons = styled.div`

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 30px 0;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23 , 26 , 32, 0.8);
width: 256px;
height: 40px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
font-weight: 600;

:hover {
    background-color: #000;
  }
  
  `
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
    :hover {
        background-color: #e5e5e5;
      }
`

const DownArrow = styled.img`
height: 40px;
width:40px;
animation: animateArrow  infinite 1.5s;
`