import  './Header.css'
import  Img from '../image/headerImage.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className="title">
        <span className='HeaderTitle'>WELCOME TO MY BLOG</span>
      </div>
      {/* <img src={Img} alt="" className='HeaderImage'/>  */}
    </div>
  )
}
