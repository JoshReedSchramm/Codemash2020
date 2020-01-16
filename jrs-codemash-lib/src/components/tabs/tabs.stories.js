
import React from 'react';
import { text } from "@storybook/addon-knobs";
import moment from 'moment';
import Tabs from './tabs';

export default { 
    title: "Tabs",
    component: Tabs
};



export const allStyles = () => (
    <Tabs defaultTab="tab-1">
        <Tabs.Controls>
            <Tabs.Tab targetId="tab-1">Tab 1</Tabs.Tab>
            <Tabs.Tab targetId="tab-2">Tab 2</Tabs.Tab>
            <Tabs.Tab targetId="tab-3">Tab 3</Tabs.Tab>
        </Tabs.Controls>
        <Tabs.Pane id="tab-1">
            Tab 1 Content
        </Tabs.Pane>
        <Tabs.Pane id="tab-2">
            Tab 2 Content
        </Tabs.Pane>
        <Tabs.Pane id="tab-3">
            Tab 3 Content
        </Tabs.Pane>
    </Tabs>
);
