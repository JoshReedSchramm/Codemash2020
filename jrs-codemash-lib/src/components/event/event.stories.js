
import React from 'react';
import { text } from "@storybook/addon-knobs";
import moment from 'moment';
import Event from './event.jsx';

export default { 
    title: 'Event',
    component: Event
};



export const allStyles = () => (
    <Event eventName="New Event Name" url="#" publishedDate={moment().utc()}>
    </Event>
)
