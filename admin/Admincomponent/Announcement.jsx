import React from "react";
import "../AdminCSS/Announcement.css";
import uploadimg from "../Images/upload.png";

const Announcement = () => {
  return (
      <div className="inputs-container">
        <input type="text" placeholder="Title" className="admin-input" />
        <input type="text" placeholder="Subtitle" className="admin-input" />
        <textarea name="textarea" id="#" className="admin-textArea"></textarea>
        <div>
          <div className="checkbtn">
           <label htmlFor="">Regular</label>
            <input type="checkbox"/>
            <label htmlFor="">Trending</label>
            <input type="checkbox"/>
          </div>      
            <button className="btn-uploading">
              <img src={uploadimg} alt="" />
            </button> 
        </div>
        <div className="inputs-btn">
          <button className="btnPostnow">Post now</button>
        </div>
      </div>
  );
};

export default Announcement;
