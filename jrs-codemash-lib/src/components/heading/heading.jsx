import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const headlingLevelMap = {};

headlingLevelMap["1"] = styled.h1`
    font: inherit;
    padding: 0;
    margin: 20px 0;
    font-size: 50px;
    font-weight: bold;
`;

// headlingLevelMap["1"] = headlingLevelMap[1];

headlingLevelMap["2"] = styled.h2`
    font: inherit;
    font-size: 36px;
    margin: 10px 0;
    font-style: italic;
`;

headlingLevelMap["3"] = styled.h3`
    font: inherit;
    font-size: 24px;
    margin: 5px 0;
    text-decoration: underline;
`;


/** Basic Heading Component */

const Heading = ({level, ...rProps}) => {
    const Elm = headlingLevelMap[level] ? headlingLevelMap[level] : headlingLevelMap[3];

    return (<Elm {...rProps} />)
}

Heading.propTypes = {
    level: PropTypes.string,
    as: PropTypes.string
}

export default Heading;