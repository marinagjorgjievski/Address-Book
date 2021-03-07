import React, { useState } from 'react';
import PersonForm from '../../PersonForm/PersonForm';
import PersonItem from '../../PersonItem/PersonItem';
import './PersonLlist.css'

const PersonLlist = () => {

  const [ personData, setPersonData] = useState([
    {id: "0", firstName: "Jason", lastName: "Muller", email:"jason@example.com", country: "Brazil"},
    {id: "1", firstName: "Matt", lastName: "Pears", email:"matt@example.com", country: "Japan"},
    {id: "2", firstName: "Charlie", lastName: "Stone", email:"charlie@example.com", country: "Thailand"}
  ]);

  const [showForm, setShowForm] = useState(false);
  const [updatePersonState, setUpdatePersonState] = useState({});
  const [errors, setErrors] = useState({});
  
  const showAddForm = () => {
    setShowForm(!showForm);
    setErrors({});
    setUpdatePersonState({});
  }

  const showUpdateForm = (personItem) => {
    setShowForm(!showForm);
    setErrors({});
    setUpdatePersonState(personItem);
  }
  
  const onChange = (event) => {
    setUpdatePersonState({
      ...updatePersonState,
      [event.target.name]: event.target.value,        
    });
  };

  const handleValidation = () => {
    let isValid = true;
    const newErrors = {};
    if (!updatePersonState.firstName) {
      isValid = false;
      newErrors.firstName = 'First name is required';
    }

    if (!updatePersonState.lastName) {
      isValid = false;
      newErrors.lastName = 'Last name is required';
    }

    if (!updatePersonState.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    }

    if (!updatePersonState.email !== "undefined") {
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(updatePersonState.email)) {
        isValid = false;
        newErrors.email = 'Please enter valid email address.';
      }
    }
    
    if (!updatePersonState.country) {
      isValid = false;
      newErrors.country = 'Country is required';
    }
    
    setErrors(newErrors);

    return isValid;
  }

  const submitPersonForm = updatePersonId => {
    if (!handleValidation()) {
      return;
    }

    if (updatePersonId) {
      setPersonData(
        personData.map(person => (person.id === updatePersonId)
          ? {
            id: updatePersonId,
            firstName: updatePersonState.firstName ? updatePersonState.firstName : person.firstName,
            lastName: updatePersonState.lastName ? updatePersonState.lastName : person.lastName,
            email: updatePersonState.email ? updatePersonState.email : person.email,
            country: updatePersonState.country ? updatePersonState.country : person.country,
          }
          : person
        )
      );
    } else {
      setPersonData([
        ...personData,
        {
          id: personData.length + 1,
          firstName: updatePersonState.firstName,
          lastName: updatePersonState.lastName,
          email: updatePersonState.email,
          country: updatePersonState.country
        },
      ]);
    }
    setShowForm(!showForm);
  };

  const deletePersonItem = (id) => {
    const personDataCopy = personData;

    const indexToDelete = personDataCopy.findIndex((item)=> item.id === id);
    personDataCopy.splice(indexToDelete, 1);

    setPersonData([...personDataCopy]);
  }

  return (
    <div className="container">
      <div className="add-btn">
        <button type="button" onClick={showAddForm}>{showForm ? 'X' : 'Add New Person'}</button>
      </div>
      <div className="card-list">
        {showForm
          ? (
            <PersonForm
              onChangeHandler={onChange}
              updatePersonItem={updatePersonState}
              submitPersonFormHandler={submitPersonForm}
              errors={errors}
            />
          )
          : (
            personData.map(personItem => (
              <PersonItem
                key={personItem.id}
                personData={personItem}
                updatePersonItemHandler = {() => showUpdateForm(personItem)}
                deletePersonItemHandler = {()=> deletePersonItem(personItem.id)}
              />
              ))
          )}
      </div>
    </div>
  );
};

export default PersonLlist;