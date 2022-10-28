import React from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({ userData }) => {
  return (
    <div className="card-container">
      {userData.map((user, index) => {
        return (
          <div className="card">
            <img src={user.picture.medium} alt="Avatar" />
            <div className="container">
              <h4>
                <b>{user.gender}</b>
              </h4>
              <p>{user.cell}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
