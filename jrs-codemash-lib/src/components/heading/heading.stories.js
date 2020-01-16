
import React from 'react';
import { text } from "@storybook/addon-knobs";

import Heading from './heading.jsx';

export default { 
    title: 'Heading',
    component: Heading
};



export const allStyles = () => (
    <React.Fragment>
        
        <Heading level="1">Heading 1</Heading>
        <Heading level="2">Heading 2</Heading>
        <Heading level="3">Heading 3</Heading>

    </React.Fragment>
)

export const MixedLevelAndElements = () => {
    
    const handleButtonClick = () => alert('button was clicked');

    return (
        <Heading level={text("Level", "1")} as={text("Element", 'h2')}>
            {text("Heading Text", "Heading Text")}
        </Heading>
    );
};