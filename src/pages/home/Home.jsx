import Header  from "../../header/Header";
import Posts from "../../posts/Posts";
import Topbar from "../../topbar/Topbar";
import Footer from "../FOOTER/Footer";
// import Sidebar from "../../sidebar/Sidebar";
import './Home.css'


export default function Home({blogs}) {
  return (
    <>
    <Topbar/>
    <Header />
    <div className="home container"> 
    <Posts blogs={blogs}/>
    {/* <Sidebar/> */}
    
    </div>  
   <Footer/>
      </>
   
    
  );
}
