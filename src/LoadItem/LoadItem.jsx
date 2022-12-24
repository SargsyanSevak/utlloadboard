import React from 'react'
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

import './LoadItem.css'
const LoadItem = ({date,pickup,delivery,company,weight,trucktype,price,tel,email,specialNotes,cmrCount,comment1,comment2}) => {
    return (
        <>
            <Accordion className='Accordion'>
            <AccordionItem className='AccordionItem'>
                <AccordionHeader className='AccordionHeader'>
                    <h3 className={`date`}>{date}</h3>
                    <h3 className={`trucktype`}>{trucktype}</h3>
                    <h3 className={`pickup`}>{pickup}</h3>
                    <h3 className={`arrow`}><i className="fa fa-duotone fa-arrow-right"></i></h3>
                    <h3 className={`delivery`}>{delivery}</h3>
                    <h3 className={`company`}>{company}</h3>
                    <h3 className={`tel`}>{tel ? tel : email}</h3>
                    <h3 className={`weight`}>{weight}տ</h3>
                    <h3 className={`price`}>${price}</h3>
                </AccordionHeader>
                <AccordionBody className='AccordionBody'>
                    <div className="accordion-body">
                    <h3 className={`cmr-count`}>CMR : {cmrCount}</h3>
                    <h3 className={`special-notes`}><i className="fa fa-sharp fa-solid fa-circle-exclamation"></i>{specialNotes}</h3>
                    <h3 className={`comment`}><i className="fa fa-sharp fa-solid fa-comment"></i>{comment1}</h3>
                    <h3 className={`comment`}><i className="fa fa-sharp fa-solid fa-comment"></i>{comment2}</h3>
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </>
        );
    };
    
export default LoadItem