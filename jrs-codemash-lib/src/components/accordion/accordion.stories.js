
import React from 'react';
import { text } from "@storybook/addon-knobs";
import moment from 'moment';
import Accordion from './accordion';

export default { 
    title: 'Accordion',
    component: Accordion
};



export const allStyles = () => (
    <React.Fragment>
        <Accordion title={"Test Accordion 1"}>
            Content
        </Accordion>
        <Accordion title={"Test Accordion 2"}>
            Content
        </Accordion>
        <Accordion title={"Test Accordion 3"}>
            Content
        </Accordion>
    </React.Fragment>
)
