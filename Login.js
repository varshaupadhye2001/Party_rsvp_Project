// import React,{useState,useContext} from 'react'
// import AuthContext from '../../context/authContext/authContext'
// import {Link} from 'react-router-dom'

// const Login = ()=>{
//     const{loginUser ,userAuth,errors}=useContext(AuthContext)
//     const [user,setUser]=useState({email:'',password:''})
//     const {email,password} =user

//     const handleChange=e=>{
//         setUser({...user,[e.target.name]:e.target.value })
//     }

//     const submit = e =>{
//         e.preventDefault()
//             loginUser({email,password})
        
//     } 
//     return(
//         <div className="register"> 
//            <h1>Login</h1> 
//            <form onSubmit={submit}>
//                <input type="email" name="email" placeholder="email" value={email} onChange={handleChange}/>
//                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}/>
//                <input type="submit" value="Sign Up" className="btn"/>
//             </form> 
//             <div className="question">
//             {errors !== null && <button className="danger">
//                     {errors.msg ? errors.msg : errors.error[0].msg}
//                     <span>X</span></button>}
//                 <p>Dont have an account have an account? {""} <Link to='/login'>SignUp</Link></p>
//             </div>
//         </div>
//     )
// }

// export default Login  

import React ,{useState,useContext, useEffect}from 'react'
import AuthContext from '../../context/authContext/authContext'
import {Link} from 'react-router-dom'

const Login=(props) =>{
    const { loginUser,userAuth,errors,clearError} = useContext(AuthContext)
    useEffect(()=>{
        if(userAuth){
            props.history.push('/')
        }
        
    },[userAuth,props.history])
    
    
    const [user ,setUser] = useState({email:'',password:''})
    const {email,password} = user

    const handleChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
        clearError()
    }
    
    const submit = e =>{
        e.preventDefault()
        loginUser({email,password})
        clearError()
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type ="email" name="email" placeholder="email" value={email} onChange={handleChange} />
                <input type ="password" name="password" placeholder="password" value={password} onChange={handleChange}/>
                <input type ="submit" value=" Sign In" className="btn" />
            </form>
            <div className="question">
            { errors !== null && <button className="danger">
                  {errors.msg ? errors.msg:errors.error[0].msg}    
                <span onClick={()=> clearError()}>X</span></button>}
                <p> Don't  have an account?{""}<Link to='/register'> Sign Up </Link></p>
            </div>
        </div>
    )
}

export default Login 