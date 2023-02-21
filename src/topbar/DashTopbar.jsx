import { Link } from 'react-router-dom'
import Home from '../pages/home/Home'
import './Topbar.css'

export default function DashTopbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <Link to='/' className='link'>MyBlog</Link>
          </div>
        <div className="menu">
         <ul className="nav__list">
         <Link className ="link" to ="/register">
          {/* <Link to='/addPost' className='nav__item link'>Add Post</Link> */}
          </Link>
            {/* <Link className ="link" to ="/profile"> */}
           
              {/* </Link> */}
            
         </ul>
        </div>
        
    </div>
  )
}
