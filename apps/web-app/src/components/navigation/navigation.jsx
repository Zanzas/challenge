import parkzenIcon from "../../assets/parkzenIcon.png";
import "./navigation.css";

import AddComponent from "../add/add";
import Login from "../users/login/login";

function NavigationComponent() {
  return (
    <div className="navbar">
      <img src={parkzenIcon} alt="ParkZen Icon" className="navbar-icon" />
      <div className="button-wrapper">
        <AddComponent />
      </div>
      <div className="button-wrapper">
        <Login />
      </div>
      

    </div>
  );
}

export default NavigationComponent;
