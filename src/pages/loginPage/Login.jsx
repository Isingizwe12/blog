import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import {useState,useEffect, useRef,useContext} from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from "axios";

const LOGIN_URL = "https://blogapi-uvr7.onrender.com/api/v1/user/signin";

export default function Login() {

    
  const {setAuth}=useContext(AuthContext);
  const userRef=useRef();
  const errRef=useRef();

  const[username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [errMsg,setErrMsg]=useState();
  const [success,setSuccess]=useState(false);


  // useEffect(()=>{
  //   // useRef.current.focus();
  // },[])
  useEffect(()=>{
    setErrMsg('');

  },[username,password])

  const  navigate =  useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{

          const response = await axios.post(LOGIN_URL,
            JSON.stringify({username, password}),
            {
              headers: {"content-Type": "application/json"},
              // withCredentials: true
            }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.token;
            localStorage.setItem("token",accessToken);
            setAuth ({username,password,accessToken})
            setUsername("");
              setPassword("");
               navigate("/dashboard")
                   // setSuccess(true);

              } catch(err){
                  if(!err?.response){
                    setErrMsg('No Server Response');
                  } else if(err.response?.status === 400){
                    setErrMsg('Missing Username or password');
                  } else if(err.response?.status === 401){
                    setErrMsg("Unauthorised");
                  } else{
                    setErrMsg("Login Failed");
                  }
              }

console.log(username,password);
setUsername('');
setPassword('');
    
  }
  return (
    <>
    {success ? (
   <section>
   <h1 style={{color: "black"}}>Login Successfully</h1>
   <p style={{textAlign:'center'}}><Link to="/dashboard">Continue to Dashboard</Link></p>
   <br/>
   </section>
    ):(

 
    <section>
      
    <div className='login'>
        <span className="loginTitle">Login</span>
        <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
      <form  onSubmit={handleSubmit} className="loginForm">
        <label htmlFor='username'>Username</label>
           <input
            type="text"
             id='username' 
             ref={userRef}
             autoComplete='off'
             onChange={(e)=>setUsername(e.target.value)}
             value={username}
             

             placeholder='Enter Your Username..' />
           <label htmlFor='password'>Password</label>
           <input
            type="password"
            id='password' 
            
            
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            

           
           
           
           placeholder='Enter Your Password..' />
           <button style={{backgroundColor:'teal',textAlign:'center', color:'white',padding:'10px', borderRadius:'10PX', margin:'20px'}}>Login</button>
          
      </form>
      <h3 style={{color:'teal', margin:'20px'}} >Don't have an Account?</h3>
      <Link to='/register'  style={{textAlign:'center',color:'black', padding:'0', fontSize:'20px'}}>Sign Up</Link>
    </div></section>)}</>
  );
}
