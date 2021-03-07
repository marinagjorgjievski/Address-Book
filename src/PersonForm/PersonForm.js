import React from 'react';
import './PersonForm.scss'

const { getData } = require('country-list');

const PersonForm = ({onChangeHandler, updatePersonItem, submitPersonFormHandler, errors}) => {

  return (
    <div className="add-form-card">
      <form noValidate autoComplete="off">
        <h4>Add New Person</h4>
        <hr></hr>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <div className="input-group">
            <input
              name="firstName"
              id="firstName"
              type="text"
              defaultValue={updatePersonItem ? updatePersonItem.firstName : null}
              onChange={onChangeHandler}
            />
            <span style={{color: "red"}}>{errors.firstName}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <div className="input-group">
            <input
              name="lastName"
              id="lastName"
              type="text"
              defaultValue={updatePersonItem ? updatePersonItem.lastName : null}
              onChange={onChangeHandler}
            />
            <span style={{color: "red"}}>{errors.lastName}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className="input-group">
            <input
              name="email"
              id="email"
              type="text"
              defaultValue={updatePersonItem ? updatePersonItem.email : null}
              onChange={onChangeHandler}
            />
            <span style={{color: "red"}}>{errors.email}</span>
          </div>
        </div>
        <div className="form-group"> 
          <label htmlFor="country">Country:</label>
          <div className="input-group">
            <select
              id="country"
              name="country"
              onChange={onChangeHandler}
              defaultValue={updatePersonItem ? updatePersonItem.country : null}
              >
              <option></option>
              {getData().map(country => 
                <option
                  key={country.code}
                  value={country.name}
                  >
                  {country.name}
                </option>
              )}
            </select>
            <span style={{color: "red"}}>{errors.country}</span>
          </div>
        </div>
        <div>
          <button type="button" onClick={() => submitPersonFormHandler(updatePersonItem ? updatePersonItem.id : null)} >Submit </button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm;