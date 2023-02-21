import './Profile.css'
import DashTopbar from '../../topbar/DashTopbar'
import { Link } from 'react-router-dom'
import DashboardHeader from '../../header/DashboardHeader'
import Sidebar from '../../sidebar/Sidebar'

export default function 
() {
  return (
    <>
    <Sidebar/>
    <div className='profile'>
        <h1>Update your Profile</h1>
      <form action="" className='form'>
        <label>Username</label><br/>
        <input className='FormInput' type="text"  placeholder='Username...'/><br/>
        <label>Email</label><br/>
        <input className='FormInput' type="text" placeholder='Email...' /><br/>
        <label>Password</label><br/>
        <input className='FormInput' type="password" placeholder='Password...' /><br/><br/>
        <button className='update'>UPDATE</button >
        {/* <Link to="/" className='logout' style={{textDecoration:'none'}}>LOGOUT</Link><br/> */}
        

      </form>

    </div>
    </>
  )
}
