import React, {useState} from 'react';
import styled from 'styled-components';

const AccordionWrap = styled.div`
    margin: 10px auto;
`
const AccordionButton = styled.button`
    font-size: 20px;
    border: 1px solid black;
    padding: 5px;
    display: block;
    width: 100%;
    text-align: left;
    &::after {
        content: "${({isOpen}) => isOpen ? "-" : "+"}";
    }
`

const AccordionContent = styled.div`
    display: ${({isOpen}) => isOpen ? "block" : "none"};
    padding: 10px;
`;
/** Basic Heading Component */

const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <AccordionWrap>
            <AccordionButton onClick={handleClick} isOpen={isOpen}>{title}</AccordionButton>
            <AccordionContent isOpen={isOpen}>
                {children}
            </AccordionContent>
        </AccordionWrap>
    )
}



export default Accordion;