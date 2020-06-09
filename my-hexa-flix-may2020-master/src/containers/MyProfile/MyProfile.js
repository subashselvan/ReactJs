import React, { Component } from 'react';

class MyProfile extends Component{
  constructor(props){
    console.log(' ------ 1. Inside Constructor of MyProfile  ------ ');
    super(props);
    this.state = {
      userName: "Arun",
      accountCreated: '4/May/2018'
    }
  }

  static getDerivedStateFromProps( props, state){
    console.log(' ----- 2. Inside getDerivedStateFromProps of MyProfile -------- ');
    return state;
  }



  inputChangeHandler = ($event) =>{
    console.log($event.target.value);
    this.setState({
      userName: $event.target.value
    });
  }

  componentDidMount(){
    console.log('----- 4. Inside componentDidMount of MyProfile --------');
    // ideal for you send ajax calls 
    // get the resp rest api -- json
    // patch it up with existing state
    // don't do setState -- it will re-render and crash your app
  }


  render(){
    console.log(' ----- 3. Inside Render of MyProfile -------- ');
    return(
      <div>
        <h2>Update Profile | Two Way Binding Example</h2>
        { /* the following input field without 
          onChange will show error in console 
        and it will be immutable */ }
        <input type='text' value={this.state.userName} 
        onChange={this.inputChangeHandler}/>
        <p>Username: {this.state.userName} </p>
        <span>
          Account Created On: {this.state.accountCreated}
        </span>
      </div> 
    )
  }
}

export default MyProfile;