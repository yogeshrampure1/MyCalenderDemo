import React ,{ useState }  from 'react'
import SingleDate from './SingleDate';

const Home = ({thisMonth}) => {
    const [list, setList]= useState(Array.from({length: 30}, (_, i) => i + 1));
    // setList(Array.from({length: 10}, (_, i) => i + 1));
    console.log(list);
    const [numberOfDays, setNumberOfDays]= useState();
    const [events, setEvents]=useState([
        {date: "3-November-2022",time: "11:00 am", eventName: "GoogleMeet"},
        {date: "1-November-2022",time: "11:40 am", eventName: "Daily Catchup"},
        {date: "2-November-2022",time: "11:00 am", eventName: "Daily Catchup"},
        {date: "3-November-2022",time: "11:00 am", eventName: "Daily Catchup"},
        {date: "1-November-2022",time: "10:00 am", eventName: "Daily Catchup"},
              
])


  return (
    <section className='colors'>
        {list.map((item, id)=>{
            const thisDate1= item+"-"+thisMonth+"-2022";
            console.log("thisDate1",thisDate1);
            const eventsForDate= events.filter((i)=>{
                console.log("i",i.date);
                console.log("thisDate1", thisDate1);

                return i.date==thisDate1
            })
            console.log("eventsForDate", eventsForDate);
            return (<SingleDate key={id} item={item} eventsForDate={eventsForDate}
            />)

        })}

    </section>
  )
}

export default Home