import React from "react";
import "./Sidebar.css";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import BarChartIcon from "@mui/icons-material/BarChart";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Distributes from "../Distributes/Distributes";
import * as AiIcons from "react-icons/ai";

const Sidebar = () => {
  const percentage = 27
  const percentage2 = 67



  // Sidebar for all users anlyize with distribution
  return (
    <div className="sidebar">
      <h6>WSTF FRONT-END HACKATHON</h6>
      <div className="div1">
        <p className="users">
          All Users <span>DETAIL</span>
        </p>
        <p className="total">2,431,340</p>
      </div>
      {/* Adding Distributes Components */}
      <div className="distributes">
        <Distributes
          title="Total Earning"
          count="540,549"
          bg="#8676FF"
          icon={
            <TrendingUpSharpIcon
              style={{
                color: "white",
                height: "30px",
                width: "30px",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Distributes
          title="Sales"
          count="1,205,677"
          bg="#8676FF"
          icon={
            <AiIcons.AiOutlineCrown
              style={{
                color: "white",
                height: "30px",
                width: "30px",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Distributes
          title="Purchase"
          count="48,430,039"
          bg="#FF9066"
          icon={<BarChartIcon style={{ color: "white" }} size="25" />}
        />
      </div>

      {/* Adding Active Users and New Users using activeNewUser components. */}
      <div className="percentage-circle">
        <div className="percentage-circle-body">
          <div  style={{ width: 70, height: 70, display:"flex"}}>
          {/* used react-circular-progressbar*/}
          <CircularProgressbar value={percentage} text={`${percentage}%`} />; 
          </div>
          <div>
            <div className="percentage-circle-data">92,980</div>
            <div className="percentage-circle-title">Active users</div>
          </div>
        </div>
        <div className="percentage-circle-body">
          <div style={{ width: 70, height: 70, display:"flex"}}>
          <CircularProgressbar value={percentage2} text={`${percentage2}%`} />;
          </div>
          <div>
            <div className="percentage-circle-data">92,980</div>
            <div className="percentage-circle-title">Active users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

