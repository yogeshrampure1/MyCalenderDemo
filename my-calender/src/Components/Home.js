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


let objList = [{
    "id" : 5,
    "name" : "June"
  },{
    "id" : 4,
    "name" : "Jane"
  },{
    "id" : 3,
    "name" : "Julia"
  },{
    "id" : 2,
    "name" : "Nancy"
  },{
    "id" : 5,
    "name" : "June"
  },{
    "id" : 5,
    "name" : "June"
  }];
  
  let uniqueList = [];
  let dupList = [];
  
  Array.prototype.contains = function(item){
    let filtered_item = this.filter((i) => {
      return i.id === item.id
    });
    return !!filtered_item.length;
  }
  
  function contains(list, item){
    let filtered_item = list.filter((i) => {
      return i.id === item.id
    });
    return !!filtered_item.length;
  }
  
  function pushToUniqueList(item){
    if(!uniqueList.contains(item)) uniqueList.push(item);
  }
  
  function pushToDuplicateList(item){
    if(!dupList.contains(item)) dupList.push(item);
  }
  
  for(let i = 0; i < objList.length; i++){
    if(uniqueList.contains(objList[i])){
      pushToDuplicateList(objList[i]);
    } else {
      pushToUniqueList(objList[i]);
    }
  }
  
  console.log('Duplicate list is ', dupList);
  console.log('Unique list is ', uniqueList);

  return (
    <section className='colors'>
        {list.map((item, id)=>{
            const thisDate1= item+"-"+thisMonth+"-2022";
            const eventsForDate= events.filter((i)=>{

                return i.date==thisDate1
            })
            return (<SingleDate key={id} item={item} eventsForDate={eventsForDate}
            />)

        })}

    </section>
  )
}

export default Home