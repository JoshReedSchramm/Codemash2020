import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../heading/heading.jsx';
import Button from '../button/button.jsx';
import moment from 'moment';

const ButtonWrapper = styled.div` 
    text-align: right;
`
const EventWrap = styled.div`
    display: grid;
    grid-template-areas: "cal content";
    grid-gap: 20px;
    grid-template-columns: 75px 1fr;
`;

const EventCal = styled.div`
    grid-area: cal;
    width: 75px;
    height: 75px;
    background: #ccc;
    display: grid;
    grid-template-areas: "date"
                         "month";
    grid-template-rows: 1fr auto;
    text-align: center;
`
const EventDate = styled.div`
   font-size: 24px;
   justify-self:center;
   align-self: center;
   grid-area: date;
`

const EventMonth = styled.div`
   font-size: 24px;
   justify-self:stretch;
   align-self: center;
   grid-column: date;
   background: red;
   grid-area: month;
`

const EventText = styled.div` 
    grid-area: content;
`

const NextLink = ({url}) => {
    if (!url) {
        return null;
    }

    return (
        <ButtonWrapper>
            <Button href={url}>Learn More</Button>
        </ButtonWrapper>
    )    
}
/** Basic Article  Component */

const Event = ({eventName, url, date}) => {
    const dateMoment = moment(date)
    const dateText = dateMoment.format('DD');
    const monthText = dateMoment.format('MMM');
    return (
        <EventWrap>
            <EventCal>
                <EventDate>{dateText}</EventDate>
                <EventMonth>{monthText}</EventMonth>
            </EventCal>
            <EventText>

                <Heading level="3">{eventName}</Heading>
                <NextLink url={url} />

            </EventText>
        </EventWrap>
    )
}

Event.propTypes = {
    eventName: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.dateText
}

export default Event;