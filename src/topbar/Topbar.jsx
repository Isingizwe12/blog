import { Link } from 'react-router-dom'
import Home from '../pages/home/Home'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <Link to='/' className='link'>MyBlog</Link>
          </div>
        <div className="menu">
         <ul className="nav__list">
         <Link className ="link" to ="/register">
          <li className='nav__item'>SignUp</li>
          </Link>
            <Link className ="link" to ="/login">
              <li className='nav__item'>Login</li>
              </Link>
            
         </ul>
        </div>
        
    </div>
  )
}
