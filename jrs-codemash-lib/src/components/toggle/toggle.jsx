import React, {useState} from 'react';
import styled from 'styled-components';

const UiToggle = styled.button`
    width: 100px;
    height: 50px;
    position: relative;
    border: 1px solid ${({on}) => on ? 'green' : 'red'};
    padding: 0;
    &::before {
        content: '';
        left: ${({on}) => on ? 'auto' : 0};
        top: 0;
        right: ${({on}) => on ? 0 : 'auto'};
        width: 50px;
        height: 50px;
        transform: scale(.8);
        position: absolute;
        display: block;
        background: ${({on}) => on ? 'green' : 'red'};
        transform-origin: center center;
    }
`;

/** Basic Heading Component */

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => setIsOn(!isOn);

    return (
        <UiToggle on={isOn} onClick={handleClick} />
    )
}



export default Toggle;