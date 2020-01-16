import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const teal = '#00ffcc';
const black = '#000';
const purple = 'purple'
const transparent = 'transparent';

const StyledButton = styled.button`
    align-content: center;
    align-items: center;
    appearance: none;
    background-color: ${({primary}) => primary ? purple : transparent};
    border: none;
    box-shadow: 0 0 0 2px ${teal};
    border-radius: 20px;
    color: ${black};
    display: inline-flex;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    height: 50px;
    padding: 0 20px;
    margin: 3px;
    text-decoration: none;
    transition: background-color 250ms linear;
    &:hover, &:focus {
        background-color: ${({primary}) => primary ? transparent : teal};
        color: ${black};
    }
`;

const StyledButtonLink = (props) => (<StyledButton as='a' {...props} />);

/**
 * This is a basic `Button` Component. 
 * 
 * It will render as either a `button` or an `a` tag depending on whether href is passed.
 * 
 */

const Button = (props) => {
    const ButtonElm = props.href ? StyledButtonLink : StyledButton;
    return (<ButtonElm {...props} />);
}

Button.propTypes = {
    href: PropTypes.string,
    primary: PropTypes.bool
} 

Button.defaultProps = {
    primary: false
}

export default Button;