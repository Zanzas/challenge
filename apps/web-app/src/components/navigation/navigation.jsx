import ButtonComponent from "../tools/button/button";
import parkzenIcon from "../../assets/parkzenIcon.png";
import "./navigation.css";
import AddComponent from "../add/add";
function NavigationComponent() {
  return (
    <div className="navbar">
      <img src={parkzenIcon} alt="ParkZen Icon" className="navbar-icon" />
      <div className="button-wrapper">
        <AddComponent />
      </div>
    </div>
  );
}

export default NavigationComponent;
