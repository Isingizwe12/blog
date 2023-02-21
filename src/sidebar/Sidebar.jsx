import './Sidebar.css'
import image from '../image/HH.jpg'
import{AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
    <div className='header'>
      <div className="title">
        <span className='HeaderTitle'>WELCOME TO DASHBOARD</span>

      </div>
      {/* <img src={Img} alt="" className='HeaderImage'/>  */}
    </div>
    <div className="sidebar">
       
        <ul>
          <Link to='/dashCharts' className='link-dash'> <li>Dashboard</li></Link>
             <Link to='/dashboard' className='link-dash'> <li > All Post</li></Link>
        <Link to='/addPost' className='link-dash'> <li>Add Post</li></Link>
        <Link to='/' className='link-dash'> <li >Logout</li></Link>

             </ul>

            
             </div>
    
             </>)
}
 