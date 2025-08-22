import React from "react";
import './Transaction.css'
import { IoMdCloseCircleOutline} from 'react-icons/io';
import { MdOutlineModeEdit } from "react-icons/md";
import {PiPizza,PiGift} from 'react-icons/pi'
import {BsSuitcase2 } from 'react-icons/bs'



const max_data=3;
export default function Transaction({details}) {
  return (
    <div className="tcard">
       <div>
         <div className="icons">
          {/* {details.category="food"&&<PiPizza />}
          {details.category="entertainment"&&<PiGift />}
          {details.category="travel"&&<BsSuitcase2 />} */}

         </div>
        </div>
      <div className="cardContent">
        <div>
         <div>
          {/* <h5>{details.title}</h5>
          <p>{details.date}</p> */}
        </div>
        </div>      
         </div>


      <div className="editexpense">
        <p className="price">₹150</p>
        <div className="cardbuttons">
            <button className="delete">
                <IoMdCloseCircleOutline />
            </button>
            <button className="edit" >
            <MdOutlineModeEdit />
           </button>
        </div>
      </div>
    </div>
  );
}
