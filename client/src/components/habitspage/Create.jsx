import React from 'react';

const Create = ({ createValue, changeInput, habitSubmit }) => {

  return (
    <form className="habitcreation" >
      <input placeholder="What habit are you working on?" onChange={changeInput}></input>
      <button type="submit" onClick={habitSubmit}>Create</button>
    </form>
  );
}

export default Create;