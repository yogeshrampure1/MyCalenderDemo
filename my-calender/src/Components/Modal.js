import React from 'react'

const Modal = ({eventsToday}) => {
  return (
    <div>
        {eventsToday
        .sort((a,b)=>{return (a.time>b.time)}).map((event)=>{
            return <article key ={event.id}>
                {event.time}
    {event.eventName}
</article>
        })}
        Events
    </div>
  )
}

export default Modal