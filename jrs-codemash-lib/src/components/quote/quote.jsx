import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const StyledQuote = styled.div`
    padding: 20px;
    background: #ccc;
    text-align: right;
`;

const QuoteText = styled.div`
    font-size: 30px;
    font-style: italic;
    text-align: center;
`;

const QuoteSource = styled.div`
    color: red;
`
const QuoteDate = styled.div`
    color: blue;
    font-size: 12px;
`

/** Basic Heading Component */

const Quote = ({children, source, date}) => {
    const dateText = moment(date).format('MMM Do, YYYY');
    return (
        <StyledQuote>
            <QuoteText>
                {children}
            </QuoteText>
            <QuoteSource>{source}</QuoteSource>
            <QuoteDate>{dateText}</QuoteDate>
        </StyledQuote>
    )
}

Quote.propTypes = {
    source: PropTypes.string,
    date: PropTypes.dateText
}

export default Quote;