import React, { Component } from 'react';
import axios from 'axios';

// Class Comp
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false
    }
  }

  contactFormSubmitHandler(event){
    event.preventDefault();
    console.log("Submitted");
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    const contactData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value
    }
    // send the data to rest api 
    // find the rest api end point 
    // send the above data over POST method
    // rest api client -- axios
    axios.post('https://reqres.in/api/users', contactData)
      .then( (response) => {
        console.log(response);
        this.setState({
          isSaved: true
        });
        // todo: redirect 

      })
      .catch( (error) => {
        console.log(error);
        this.setState({
          isSaved: false
        });
      })
      .finally( () =>  {
        console.log('It\'s over');
      });
  }

  render(){
    return(
      <form className='container text-left' 
      onSubmit={this.contactFormSubmitHandler.bind(this)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            ref={ (inputEl) => {this.emailInput = inputEl } }/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput2">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            ref={ (inputEl) => {this.phoneInput = inputEl } }
          />
        </div>
        <button type="submit" 
        className="btn btn-primary" 
        >Submit</button>

        { this.state.isSaved? 
          <div className='alert alert-success'>Saved Successfully</div>
          :
          <div className='alert alert-danger'>Some error occured</div>
        }
      </form>
    )
  }
}

export default ContactForm;