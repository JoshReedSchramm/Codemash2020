
import React from 'react';
import { text } from "@storybook/addon-knobs";

import Heading from '../heading/heading.jsx';
import BlogItem from '../blog/blog.jsx';
import Event from '../event/event.jsx';
import Button from '../button/button.jsx';
import Quote from '../quote/quote.jsx';

export default { 
    title: 'Homepage'
};



export const allStyles = () => (
    <React.Fragment>
        
        <Heading level="1">About Me</Heading>

        <Quote source="Myself" date={new Date()}>
            I am the best.
        </Quote>

        <Button url="#">Learn More</Button>

        <Heading level="2">Blog Posts</Heading>
        <BlogItem articleName="New Article 1" url="#" publishedDate={new Date()}>
            This is a Blog Post Item.
        </BlogItem>
        <BlogItem articleName="New Article 1" url="#" publishedDate={new Date()}>
            This is a Blog Post Item.
        </BlogItem>
        <BlogItem articleName="New Article 1" url="#" publishedDate={new Date()}>
            This is a Blog Post Item.
        </BlogItem>
        
        <Heading level="3">Upcoming Events</Heading>

        <Event eventName="CodeMash" date={new Date()} url="#" />
        <Event eventName="CodeMash" date={new Date()} url="#" />
        <Event eventName="CodeMash" date={new Date()} url="#" />

    </React.Fragment>
)

export const MixedLevelAndElements = () => {
    
    const handleButtonClick = () => alert('button was clicked');

    return (
        <Heading level={text("Level", "1")} as={text("Element", 'h2')}>
            {text("Heading Text", "Heading Text")}
        </Heading>
    );
};