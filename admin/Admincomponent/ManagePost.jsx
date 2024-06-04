import React from "react";
import Sort from "../Images/Sort.png";
import SearchIcon from "../Images/magnifying.png";
import "../AdminCSS/Managepost.css";

const ManagePost = () => {
  return (
    <>
      <div className="Mpos-wrapper">
        <div className="Mpos-sort">
          <span>Sort</span>
          <img src={Sort} alt="" />
        </div>
        <div className="Mpos-input">
          <input type="text" className="Mpos-text" />
          <img src={SearchIcon} alt="" className="MposSearch-icon" />
        </div>
      </div>
      <div className="Mpos-tbl">
        <table>
          <tr>
            <th>Name</th>
            <th>Date posted</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>CICS</td>
            <td>05/23/2024</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ManagePost;
