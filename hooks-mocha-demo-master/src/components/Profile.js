import React, { useState } from 'react';

const Profile = () => {

  // having state in fn comp 
  const [ myProfile, setMyProfile ] = useState({
    name: 'Arun',
    city: 'Chennai'
  });
  console.log(myProfile);



  // will return array with getter and setter 
  // note: setting state will not merge here in useState 
  
  return(
    <div>
      <h2>Profile | useState() Example </h2>
      <p>{myProfile.name} from {myProfile.city} </p>
      <button type='button' onClick={() => { 
        setMyProfile({
          name: 'VJ',
          city: 'hyd'
        })
       } }>Update Profile</button>
    </div>
    
  )
}

export default Profile;