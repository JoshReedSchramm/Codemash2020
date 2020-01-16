
import React from 'react';
import { text } from "@storybook/addon-knobs";
import moment from 'moment';
import Quote from './quote.jsx';

export default { 
    title: 'Quote',
    component: Quote
};



export const allStyles = () => (
    <Quote source={text("Source", "John Doe")} date={moment().utc()}>
        Something something something.
    </Quote>
)
