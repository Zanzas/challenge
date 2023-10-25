import './Header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div class="menu">
            <h1>Sales.io</h1>
            <div class="menu-item"><i class="icon-home"></i><NavLink to="/home">Accueil</NavLink></div>
            <div class="menu-item"><i class="icon-dashboard"></i><NavLink to="/park">Parking</NavLink></div>
            <div class="menu-item"><i class="icon-products"></i><NavLink to="/contact">Contact</NavLink></div>
        </div>   
    )
}