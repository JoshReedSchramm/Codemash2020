import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuote = styled.blockquote`
    align-content: center;
`;

/**
 * This is a basic `Blockquote` Component. 
 * 
 * It will render as either a `blockquote` with the text, cite and date provided.
 * 
 */

const Blockquote = (props) => {
    return (
        <StyledQuote {...props}>
            <p>{props.children}</p>
            <small>{props.cite}</small> - <bold>{props.date}</bold>
        </StyledQuote>
    );
}

Blockquote.propTypes = {
    text: PropTypes.string,
    cite: PropTypes.string,
    date: PropTypes.date
} 

Blockquote.defaultProps = {
}

export default Blockquote;