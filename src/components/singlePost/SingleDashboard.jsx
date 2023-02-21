import DashTopbar from '../../topbar/DashTopbar'
import SinglePostDashboard from './SinglePostDashboard'
import Footer from '../../pages/FOOTER/Footer'


export default function Single() {
  return (
    <>
    <DashTopbar/>
    <div className='single'>
        {/* post */}
        
        <SinglePostDashboard/>
        

    </div>
    <Footer/>
    </>
  )
}
