import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import Button from '../button/button.jsx';

/** Basic Heading Component */

const TabContext = React.createContext({
    openTab: null
});

const TabList = ({defaultTab, children}) => {
    const [openTab, setOpenTab] = useState(defaultTab);

    return (
        <TabContext.Provider value={{openTab, setOpenTab}}>
            {children}
        </TabContext.Provider>
    )
}

TabList.Controls = styled.div`
    display: flex;
    flex-direction: flex-start;
    gap: 10px;
`;

TabList.Tab = ({targetId, children}) => {
    const {openTab, setOpenTab} = useContext(TabContext);
    const isOpen = openTab === targetId;
    const handleClick = () => setOpenTab(targetId);
    return (
        <Button primary={isOpen} onClick={handleClick}>{children}</Button>
    )
}

TabList.Pane = ({id, children}) => {
    
    const {openTab} = useContext(TabContext);

    const display = id === openTab ? 'block' : 'none';

    return (
        <div style={{display}}>
            {children}
        </div>
    )
}
export default TabList;