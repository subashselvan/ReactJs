import React, { useState, useEffect } from "react";

const UserData = () => {
  const [name, setName] = useState("Arun");

  // like componentDid Mount for class comp 
  useEffect( () => {
    console.log('into useEffect');
    document.title = name;
  }, [name]);

  // second argument is a dependency
  // if the dependency is changed by any means, useEffect() will be executed again.
  // by default useEffect() will be automatically called once
  // check the page title after changing the input field
  // alternative to componentDidMount for fn comp 
  
  return (
    <div>
      <hr />
      <h2>useEffect() Hook | Check the page title </h2>
      <input value={name} onChange={event => setName(event.target.value)} />
      <p>{name}</p>
    </div>
  );
}

export default UserData;