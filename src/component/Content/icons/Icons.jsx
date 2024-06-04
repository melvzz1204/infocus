import "./icons.css";
import Like from "../icons/iconsImage/like.png";
import Share from "../icons/iconsImage/share.png";
import Heart from "../icons/iconsImage/heart.png";
import Message from "../icons/iconsImage/message.png";
import { useState } from "react";

const Icons = () => {
  const [like, setLike] = useState(0);

  const add = () => {
   setLike (like + 1)
  }
  return (
    <div className="icons-container">
      <div className="icons-container">
        <a href="#">
          <span>{like}</span>
        </a>
       <img src={Like} alt=""onClick={add}/>
      </div>
      <div className="icons-container">
        <a href="#">
          <span>Share</span>
        </a>
        <img src={Share} alt="" />
      </div>
      <div className="icons-container">
        <a href="#">
          <span>{like}</span>
        </a>
        <img src={Like} alt=""/>
        <img src={Heart} alt="" />
      </div>
      <div className="icons-container">
        <a href="#">
          <span>0</span>
        </a>
        <img src={Message} alt="" />
      </div>
    </div>
  );
};
export default Icons;
