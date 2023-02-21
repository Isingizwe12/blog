import './Post.css'
import post1 from '../image/post3.jpg'
import {BsShare} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Post() {
  return (
    <div className='post'>

    <img src={post1} alt=""  className='postImage'/>
    <div className="postInfo">
    <div className="postCats">
    <span className="postCat">Music/Life</span>
    <span className="postDate">1 hour ago</span> 
    
    </div> 
    <span className="postTitle">Lorem ipsum dolor sit amet consectetur </span> 
    
    </div>
    <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt similique itaque placeat dolorem autem voluptates quod reiciendis 
    impedit voluptas, repudiandae adipisci hic doloremque nesciunt molestiae rem ea aperiam quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, temporibus maxime, repellendus excepturi laboriosam atque 
    saepe facere velit libero, quaerat labore tempora explicabo autem vel ullam repellat? Natus, ut neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit et numquam neque incidunt voluptates quas vero voluptas. Minus ipsum animi sit dolore obcaecati,
     nisi soluta vero maxime tempore delectus?  </p>
     <div className="bottom">
     <span>
     <BsShare className='postIcon'/>
      <FaRegComment className='postIcon'/>
     </span>
      <button className='readmeButton'>
      <Link to='/single' className='link'>ReadMore</Link>
      </button>
     </div>
    
    </div>
  )
}
