import './header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className='header'>
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/parkSlot">Parking</NavLink>
        </div>
    )
}