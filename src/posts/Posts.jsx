import post1 from '../image/post3.jpg'
import {BsShare} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Post.css'
import './Posts.css'

export default function Posts({blogs}) {
  return (
    <div className='container-post'>

      {blogs.map((blog) =>{
        return (
          <div className="post__container">
            <div className="post">
              <img src={blog.image} alt="" className="postImage" />
              <div className="postInfo">
                <div className="postCats">
                  <span className="postCat">{blog.author}</span>
                  <span className="postDate">{blog.date}</span>
                </div>
                <span className="postTitle">{blog.title} </span>
              </div>
              <p className="postDesc">{blog.content} </p>
              <div className="bottom">
                <span>
                  <Link to={`${blog._id}`} className="link">
                    {" "}
                    <FaRegComment style={{ margin: "10px" }} />
                  </Link>
                </span>
                <button className="readmeButton">
                  <Link to={`${blog._id}`} className="link">
                    ReadMore
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
          

    </div>
  )
}
