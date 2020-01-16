
import React from 'react';
import { text } from "@storybook/addon-knobs";

import Blockquote from './blockquote.jsx';

export default { 
    title: 'Blockquote',
    component: Blockquote
};

const quoteLabel = "Quote Text";
const quoteText = "Four score and seven years ago.";

const citeLabel = "Citation / Source"
const citeText = "Honest Abe";

const dateLabel = "Date";
const dateText = "1850-10-10";

export const allStyles = () => (
    <React.Fragment>
        
        <Blockquote cite={text(citeLabel, citeText)} date={text(dateLabel, dateText)}>
            {text(quoteLabel, quoteText)}
        </Blockquote> 

    </React.Fragment>
);

