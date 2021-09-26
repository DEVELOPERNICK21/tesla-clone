import React from 'react'
import styled from 'styled-components';
import Section from './Section';
 
function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                discription="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroudImage="model-s.jpg"
            />
            <Section 
                title="Model Y"
                discription="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroudImage="model-y.jpg"
            />
            <Section 
                title="Model 3"
                discription="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroudImage="model-3.jpg"
            />
            <Section 
                title="Model X"
                discription="Order Online for Touchless Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventory"
                backgroudImage="model-x.jpg"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                discription="Money Back Guarantee"
                leftButton="Order Now"
                rightButton="learn more"
                backgroudImage="solar-panel.jpg"
            />
            <Section 
                title="Solar for New Roofs "
                discription="Solar Roof Less Than a New Roof Plus Solar Panels "
                leftButton="Order Now"
                rightButton="learn more"
                backgroudImage="solar-roof.jpg"
            />
            <Section 
                title="Accessories"
                discription=""
                leftButton="Order Now"
                backgroudImage="accessories.jpg"
            />
        </Container>

    )
}

export default Home;

const Container = styled.div`
height: 100vh;
`