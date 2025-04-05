import '../css/navbar.css';
import logoSVG from '../assets/logo.svg'

export default function Navbar() {


    return (
        <>
        <div className='navbar-div'>
        <nav>
            <img src={logoSVG}></img>
          <div id='brand-text'>
            <h1><span>VM</span> WOODWORKS </h1>
            <div>
            <p id='motto'><span>Woodworking with Heart</span> and Hands</p>
            </div>
          </div>
        </nav>
        <div id='nav-links-menu'>
            <ul>
                <li>Portfolio</li>
                <li>About</li>
                <li>Placeholder</li>
                <li>Placeholder</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
        </>
    )
}