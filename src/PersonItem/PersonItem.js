import React from 'react';
import './PersonItem.css'

const PersonItem = ({ personData, updatePersonItemHandler, deletePersonItemHandler }) => {
  return (
    <div className="personal-item">
      <div className="card">
        <div className="action-btns">
          <button className="edit-btn" onClick={updatePersonItemHandler}>Edit</button>
          <button className="delete-btn" onClick={deletePersonItemHandler}>Delete</button>
        </div>
        <h4><b>{personData.firstName} {personData.lastName}</b></h4> 
        <p><b>Email:</b> {personData.email}</p> 
        <p><b>Country:</b> {personData.country}</p>
      </div>
    </div>
  );
};

export default PersonItem;