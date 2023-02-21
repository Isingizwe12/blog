import React from 'react'
import Home from './pages/home/Home';
// import Dashboard from './pages/Dashboardd/Dashboard';
import Topbar from './topbar/Topbar';
// import Post from './post/Post';
// import single from './components/single/Single'
// import SinglePost from './components/singlePost/SinglePost';
import Login from './pages/loginPage/Login'
import Sidebar from './sidebar/Sidebar';
import Charts from './components/dashCharts/Charts';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './pages/registerPage/Register';
import Single from './components/single/Single';
// import Footer from './pages/FOOTER/Footer'
import Dashboard from './pages/Dashboardd/Dashboard';
import AddPost from '../src/components/addPost/AddPost';
import Profile from './components/profile/Profile';
import SingleDashboard from './components/singlePost/SingleDashboard'
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {
  const [blogs, setBlogs] = useState([]);
  //fetchBlogs
 const fetchBlogs = async () =>{
  const response = await axios.get("https://blogapi-uvr7.onrender.com/api/v1/blog/getAll");
  const data = await response.data.data.AllBlogs;
  console.log(data)
  return data;
  
 }
 useEffect(() =>{
  const getBlogs = async () =>{
    const blogsFromServer = await fetchBlogs();
    setBlogs(blogsFromServer);
  }
  getBlogs();
 }, [])
 console.log(blogs);
 




  return (
    <> 
    <Router>
    
    
    <Routes>
     <Route exact path='/' element={<Home blogs={blogs}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/:blogId' element={<Single blogs={blogs}/>}/>
      <Route path='/homee' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard blogs={blogs}/>}/>
      <Route path='/addPost' element={<AddPost/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/singleDashboard' element={<SingleDashboard />} />
      <Route path='/dashCharts'  element={<Charts/>}/> 
    </Routes>
   
    </Router>
    
    </>
   
    
    
  );
}

export default App
