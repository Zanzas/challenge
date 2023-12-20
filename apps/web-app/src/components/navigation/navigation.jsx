import parkzenIcon from "../../assets/parkzenIcon.png";
import "./navigation.css";

import AddComponent from "../add/add";
import Profil from "../profil/profil";

function NavigationComponent() {
  return (
    <div className="navbar">
      <img src={parkzenIcon} alt="ParkZen Icon" className="navbar-icon" />
      <div className="navbar-right">
        <div className="button-wrapper">
          <AddComponent />
        </div>
        <div className="button-wrapper">
          <Profil />
        </div>
      </div>
    </div>
  );
}

export default NavigationComponent;
