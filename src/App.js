import React from 'react';
import './App.css';
import PersonLlist from './Person/PersonLlist/PersonLlist';

function App() {
  return (
    <div>
      <h1 className="header">Address Book</h1>
      <PersonLlist/>
    </div>
  );
}

export default App;