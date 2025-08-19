import React from "react";
import './Transaction.css'
import { IoMdCloseCircleOutline} from 'react-icons/io';
import { MdOutlineModeEdit } from "react-icons/md";

export default function Transaction() {
  return (
    <div className="tcard">
       <div>
          <h3>Recent Transactions</h3>
        </div>
      <div className="cardContent">
        <div>
         <div>
          <h5>samaosa</h5>
          <p>date</p>
        </div>
        </div>
        
         
      </div>


      <div className="editsection">
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
