
import React from 'react';
import { text } from "@storybook/addon-knobs";
import moment from 'moment';
import Blog from './blog.jsx';

export default { 
    title: 'Blog',
    component: Blog
};



export const allStyles = () => (
    <Blog articleName="New Article Name" url="#" publishedDate={moment().utc()}>
        Something something something.
    </Blog>
)
