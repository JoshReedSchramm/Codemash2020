import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid/non-secure';

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

const Accordion = ({title, id, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const accordionId = useRef(id || nanoid());
    return (
        <AccordionWrap>
            <AccordionButton aria-controls={accordionId.current} aria-expanded={isOpen} onClick={handleClick} isOpen={isOpen}>{title}</AccordionButton>
            <AccordionContent id={accordionId.current} isOpen={isOpen}>
                {children}
            </AccordionContent>
        </AccordionWrap>
    )
}



export default Accordion;