import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { ContextValue } from '../Context/Context';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import './Filter.css'

const Filter = () => {
    const {setFilteredObj,data} = useContext(ContextValue)
    const {register,handleSubmit,reset} = useForm({
        mode : "onChange",
      })

      function handleValues (dataOfInputs){
        let truckType = dataOfInputs.trucktype;
        let pickUp = dataOfInputs.pickup;
        let delivery = dataOfInputs.delivery;
        let date = dataOfInputs.date;
        let weight = dataOfInputs.weight;
        let rate = dataOfInputs.price;
        setFilteredObj(data.filter((load)=>{
         return (
            load.trucktype.toLowerCase().includes(truckType) 
            && load.pickup.toLowerCase().includes(pickUp.toLowerCase())
            && load.delivery.toLowerCase().includes(delivery.toLowerCase())
            && load.date.toLowerCase().includes(date)
            && load.weight.includes(weight)
            && load.price >= rate
         )
        }))
       }

  return (
        <Accordion className='Accordion filter'>
            <AccordionItem className='AccordionItem'>
                <AccordionHeader className='AccordionHeader filter-header'>
                    <h3><i className="fa-solid fa-filter"></i>Ֆիլտր</h3>
                </AccordionHeader>
                <AccordionBody className='filter-container'>
                    <form className="filter-items" onSubmit={handleSubmit(handleValues)}>
                        
                    <div className="input-box">
                        <input type="text" placeholder='Մեքենայի տեսակ օր․ ռեֆ'  {...register("trucktype")}/>
                    </div>
                    <div className="input-box">
                         <input type="text"  placeholder='Բարձումը օր․ Երևան'{...register("pickup")}/>
                    </div>
                    <div className="input-box">
                        <input type="text"  placeholder='Բեռնաթափումը օր․ Մոսկվա' {...register("delivery")}/>
                    </div>
                    <div className="input-box">
                         <input type="data"  placeholder='Բարձման օր'  {...register("date")}/>
                    </div>
                    <div className="input-box">
                         <input type="number"  placeholder='Բեռի քաշ'  {...register("weight")}/>
                    </div>
                    <div className="input-box">
                         <input type="number"  placeholder='Գին'  {...register("price")}/>
                    </div>
                      <div className="button"><button className='filter-btn'>Կիրառել</button></div>
                      <div className="button"><button className='resetbtn' onClick={()=> {reset()
                          setFilteredObj(data)
                       }}>Մաքրել</button></div>
                    </form>
                </AccordionBody>
                </AccordionItem>
         </Accordion>
  )
}

export default Filter