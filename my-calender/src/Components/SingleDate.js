import React, { useState } from 'react';
// import {useDispatch}from '@reduxjs/toolkit'
import Modal from './Modal';

const SingleDate = ({item, eventsForDate}) => {
    // const dispatch = useDispatch()
    const [openModal, setOpenModal]= useState(false);
    const [eventsToday, setEventsToday]= useState([])
    const handleClick=(eventsForDate)=>{
        // dispatch(getEvents({
        //     date: eventsForDate
        // }))
        setEventsToday(eventsForDate)
        setOpenModal(true);
        console.log("eventsForDate2", eventsForDate);

    }
  return (
    <div className='date-box'>
        <div className='date'>
            <h5>
                {item}
            </h5>
            {eventsForDate.length && <button onClick={()=>{
                handleClick(eventsForDate)
            }}>
                Events
            </button> }
                {openModal && <Modal eventsToday={eventsToday}/>}
            </div>
    </div>
  )
}

export default SingleDate