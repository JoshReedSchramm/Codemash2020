import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../heading/heading.jsx';
import Button from '../button/button.jsx';
import moment from 'moment';

const ButtonWrapper = styled.div` 
    text-align: right;
`

/** Basic Article  Component */

const Article = ({children, articleName, url, publishedDate}) => {
    const dateText = moment(publishedDate).format('MMM Do, YYYY');
    return (
        <div>
            <Heading level="3">{articleName}</Heading>
            <div>Published on: {dateText}</div>
            <p>
                {children}
            </p>
            <ButtonWrapper>
                <Button href={url}>Read More</Button>
            </ButtonWrapper>
        </div>
    )
}

Article.propTypes = {
    articleName: PropTypes.string,
    url: PropTypes.string,
    publishedDate: PropTypes.dateText
}

export default Article;