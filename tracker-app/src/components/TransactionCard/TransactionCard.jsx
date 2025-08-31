import "./TransactionCard.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiPizza, PiGift } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

export default function TransactionCard({ details, handleDelete, handleEdit }) {
  return (
    <div className="card">
      <div className="row">
        <div className="icon">
          {details.category === "food" && <PiPizza />}
          {details.category === "entertainment" && <PiGift />}
          {details.category === "travel" && <BsSuitcase2 />}
        </div>
        <div className="info">
          <h5>{details.title}</h5>
          <p>{details.date}</p>
        </div>
      </div>

      <div className="row">
        <p className="price">{`₹${details.price}`}</p>
        <div className="buttons">
          <button className="delete" onClick={handleDelete}>
            <IoMdCloseCircleOutline />
          </button>
          <button className="edit" onClick={handleEdit}>
            <MdOutlineModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
