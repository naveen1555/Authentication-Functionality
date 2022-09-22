import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <li className="header-option">
      <Link to="/">Home</Link>
    </li>
    <li className="header-option">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
