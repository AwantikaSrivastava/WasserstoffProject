import React from 'react'
import './ActiveNewUser.css'

const ActiveNewUser = (props) => {
    // We create Active users and New Users in this component and import into Sidebar.js Component..
  return (
    <div className="active">
    <div className="active-users" style={{background: `conic-gradient(${props.color} ${props.percentage},lightgray 25%)`}}>
      <div style={{ color: "#383874", fontWeight: "400",  }}>
        {props.percentage}
      </div>
    </div>
    <p style={{ paddingLeft: "1rem", color: "#383874", fontWeight: "400" }}>
      <span>{props.title}</span>
      <br />
      <span>{props.user}</span>
    </p>
  </div>
  );
};

export default ActiveNewUser