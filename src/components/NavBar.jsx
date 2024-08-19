
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
  return (
    <>
       <header>
        <nav className='navbar'>
        <h1 className='header-logo'>
          <Link className='link' to='/'> AltokeInfo ✔</Link>
        </h1>
         
          <ul className='nav-links'>
            <li><Link className='link' to='/usestate'>useState</Link></li>
            <li><Link className='link' to='/useeffect'>useEffect</Link></li>
            <li><Link className='link' to='/usecontext'>useContext</Link></li>
            <li><Link className='link' to='/usereducer'>useReducer</Link></li>

          </ul>
        </nav>
       </header>
    </>
  )
}

export default NavBar