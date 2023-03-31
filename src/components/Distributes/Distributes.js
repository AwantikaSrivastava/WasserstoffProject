import React from 'react'
import './Distributes.css'

const Distributes = (props) => {
    //We create Total earning, Sales and Purchases in this component and import into Sidebar.js Component.
  return (
    <div className="div2">
      <div className="totalearnicon" style={{backgroundColor:`${props.bg}`}}>
        <div>
          {props.icon}
        </div>
      </div>
      <div className="total-earn">
        <p className="heading"> {props.title}</p>
        <p className="count">{props.count}</p>
      </div>
    </div>
  );
};

export default Distributes;