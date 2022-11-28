import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { getMonthbyNum, getMonthNum } from '../utils';
import { useGlobalContext } from './Context'

const Navbar = () => {
    const {thisMonth, thisYear, decreaseMonth, increaseMonth} = useGlobalContext();
//     var carBrands = [{name:'ford', value: 100, quantity: 3},
//     {name:'lexus', value: 200, quantity: 1},
//     {name:'maserati', value: 300, quantity: 1},
//     {name:'ford', value: 100, quantity: 1}
// ];
// const [unique, setUnique]= useState([]);
// const duplicates2 = carBrands.filter(o => {
     
//     const existItem= unique.find(i => i.name === o.name  && i.value===o.value);
//     if(!existItem){
//         unique.push(o)
//     }else{
//         const existingUnique= unique.filter(i=> i.name===o.name )
//         console.log("existItem 2", existingUnique);
//         let tempCart = unique.map((item) => {
//             if (item.name === existingUnique.name && item.price   == existingUnique.price) {
//               return { ...item, quantity: item.quantity + 1 }
//             }
//             return item
//           })
//           setUnique(tempCart)
//     }
//     console.log("existItem", existItem);
//  });

//  console.log("existItem unique", unique);


//  let values = [ { value: 2, label: 'Dog', quantity: 3 }, 
//                 { value: 4, label: 'Cat', quantity: 5 },
//                 { value: 3, label: 'fa', quantity: 7 },
//                 { value: 2, label: 'Dog', quantity: 9 },
//                 { value: 16, label: 'Horse', quantity: 3 } 
//               ]



// var valueArr = values.map((item)=>{item.name, item.label});
// var isDuplicate = valueArr.some(function(item, idx){ 
//     return valueArr.indexOf(item) != idx 
// });
// console.log("isDuplicate", isDuplicate);



    return (
        <div className='container'>
            <div className='navOuter'>
                <div className='leftSection'>
                    <h2>Today</h2>
                    <div className='arrows'>
                    <a onClick={decreaseMonth}> <FaAngleLeft /> </a>
                    <a onClick={increaseMonth}> <FaAngleRight /> </a>
                    </div>
                    <h2>
                        <span>{thisMonth}</span>
                        <span>{thisYear}</span>
                    </h2>
                </div>
                <div className='rightSection'>
                    <BiSearchAlt2 />
                    <AiOutlineQuestionCircle />
                    <AiOutlineSetting />
                    <div>
                        <select id="month" name="month"> 
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar