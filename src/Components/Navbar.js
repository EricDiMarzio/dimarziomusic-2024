
import {Link} from 'react-scroll';
import {useState} from 'react';

function Navbar() {
  // function handleNav(e) {
  //   e.preventDefault();
const [activeNav, setActiveNav] = useState(false);

const handleNav = () => setActiveNav(!activeNav);

  // }
  return (
    <div className="navigation">
      <input className="navigation__checkbox" type="checkbox" id="navi-toggle" checked={activeNav} onClick={handleNav}></input>
      <label for="navi-toggle" className="navigation__button">
        {/* Hamburger */}
      <span className="navigation__icon"> </span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="hero" spy={true} smooth={true} offset={50} duration={300}className="navigation__link" onClick={handleNav}>Home</Link>
          </li>
          <li className="navigation__item">
          <Link to="education" spy={true} smooth={true} offset={50} duration={300}className="navigation__link" onClick={handleNav}>Music for Education</Link>
          </li>
          <li className="navigation__item">
          <Link to="worship" spy={true} smooth={true} offset={50} duration={300}className="navigation__link" onClick={handleNav}>Music For Worship</Link>
          </li>
          <li className="navigation__item">
          <Link to="about" spy={true} smooth={true} offset={50} duration={300}className="navigation__link" onClick={handleNav}>About</Link>
          </li>
          <li className="navigation__item">
          <Link to="contact" spy={true} smooth={true} offset={50} duration={300}className="navigation__link" onClick={handleNav}>Contact</Link>
          </li>
          <li className="navigation__item">
            <a href="https://payhip.com/ericdimarzio" target="_blank" rel="noreferrer" className="navigation__link" id="shop-link">Shop</a>
          </li>
        </ul>
      </nav>
    </div>


  );
}

// function Hamburger() {

//   return (
//     <span className="navigation__icon">

//     </span>
//   );
// }

export default Navbar