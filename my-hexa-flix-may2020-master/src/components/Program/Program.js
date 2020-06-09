import React from 'react';

const Program = (props) => {

  // Props
  /*
    Props are Objects passed from Parent Comp 
    Props are read-only
    
  */

  // Event Handler 
  // onClick, onMouseOver -- synthetic events
  const watchItHandler = ($event) => { // $event - synthetic event obj
    alert('clicked-- open console to see event object');
  }

  return (
    <div className='card' style={{ marginBottom: '15px'}}>
      <div className="card-header">
        Featured 
        <span className="badge badge-warning float-right">
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <a href="#" className="btn btn-primary" 
          onClick={watchItHandler}>Watch It</a>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}


export default Program;
