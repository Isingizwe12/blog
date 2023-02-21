import { Link } from 'react-router-dom';
import './Register.css'
import {useState,useEffect,useRef} from 'react';
import axios from "axios";




  const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

const REGISTER_URL = "https://blogapi-wm30.onrender.com/api/v1/signup";

export default function Register() {

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);

  const [matchpwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name])

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchpwd;
    setValidMatchPwd(match);
  }, [password, matchpwd])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() =>{
    setErrMsg('');
  }, [name, password])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(password);
    const v3 = EMAIL_REGEX.test(email);
    if(!v1 || !v2 || !v3){
      setErrMsg("Invalid Entry");
      return;
    }
    
    try{
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({name, password, email}),
        {
          headers:{"Content-Type": "application/json"}
        }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
        setSuccess(true);
        
    } catch(err){
      if(!err?.response){
        setErrMsg('No Server Response');
      } else if(err.response?.status === 409){
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }

    }

  }

  return (
    <>
    {success ? (
   <section>
   <h1 style={{color: "black"}}>You are logged in</h1>
   <p style={{textAlign:'center'}}><Link to="/login">Continue to Login Page</Link></p>
   <br/>
   </section>
    ):(

    <section>
    <div className='register'>
        <span className="registerTitle">SignUp Here!</span>
        <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
      <form  className="registerForm" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
           <input
           className={validName? "input-valid" : "input-notvalid" }
               type="text" 
               id="username"
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setName(e.target.value)}
               aria-invalid={validName? "false": "true"}
               aria-describedby="uidnote"
               onFocus={ () => setNameFocus(true)}
               onBlur={() => setNameFocus(false)}
            placeholder='Enter Your Username..' />


            
        <label>Email</label>
           <input 
           id="email"
           onChange={(e) => setEmail(e.target.value)}
           aria-invalid={validEmail ? "false": "true"}
           aria-describedby="emailnote"
           onFocus={() => setEmailFocus(true)}
           onBlur={() => setEmailFocus(false)} placeholder='Enter Your Email'/>
           <p id="emailnote" className={emailFocus && !validEmail ? "instructions": "offscreen"} style={{color:'red'}}>
             email not valid
           </p> 
           <label> role</label>
           <select>
            <option  value="admin">admin</option>
            <option  value="user">user</option>
           </select>
           <label>Password</label>
           <input 
          type="password" 
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          aria-invalid={validPassword ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)} placeholder='Enter Your Password'/>
          <p id="pwdnote" className={PasswordFocus && !validPassword? "instructions":
        "offscreen"} style={{color:'red'}}>Must include uppercase and lowecase letters</p> 
        <button className="registerButton" >SignUp</button>
      </form>
      <p style={{padding:'10px', fontSize:'20PX',color:'teal'}}>Already have an account? <Link to='/login' style={{padding
      :'10px',fontSize:'20px'}}>Login</Link></p>
      
    </div></section> )}</>
 )}



