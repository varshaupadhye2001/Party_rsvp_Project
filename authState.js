// import React,{useReducer} from 'react'
// import axios from 'axios'
// import AuthContext from './authContext'
// import authReducer from './authReducer'
// import {
//     SUCCESS_REGISTER,
//     SUCCESS_LOGIN,
//     FAIL_REGISTER  ,
//     FAIL_LOGIN
// } from '../types'

// const AuthState = (props) => {
//     const initialState={
//         userAuth:null,
//         errors:null 
//     }
//     const [state,dispatch]=useReducer(authReducer,initialState)

//     const registerUser =async userData =>{
//         const config ={
//             header:{
//                 'Content-Type':'application/json'
//             }
//         }
//         try {
//             const res = await axios.post('/register',userData,config)
//             dispatch({
//                 type:SUCCESS_REGISTER,
//                 payload:res.data
//             })
//         } catch (err) {
//             dispatch({
//                 type:FAIL_REGISTER,
//                 payload:err.response.data
//             })
//         }
//     }
    
//     const loginUser =async userData =>{
//         const config ={
//             header:{
//                 'Content-Type':'application/json'
//             }
//         }
//         try {
//             const res = await axios.post('/auth',userData,config)
//             dispatch({
//                 type:SUCCESS_LOGIN,
//                 payload:res.data
//             })
//         } catch (err) {
//             dispatch({
//                 type:FAIL_LOGIN,
//                 payload:err.response.data
//             })
//         }
//     }
    
//     return (
//         <AuthContext.Provider value={{
//             userAuth:state.userAuth,
//             errors:state.errors,
//             registerUser,
//             loginUser
//         }}>{props.children}</AuthContext.Provider>
//     )
// }


// export default AuthState

import React,{useReducer} from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setToken from '../../utils/setToken'
import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN,
    SET_ERROR,
    CLEAR_ERROR,
    LOG_OUT,
    SET_USER,
    AUTH_ERROR
  } from '../types'
  


const AuthState = (props) => {
    const initialState ={
        user:null,
        userAuth:null,
        errors:null
    }

    const getUser = async () =>{
        if(localStorage){
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get('/auth')
            dispatch({
                type:SET_USER,
                payload:res.data
            })
        } catch (err) {
            dispatch({ 
                type:AUTH_ERROR,
                payload:err
            })
        }
    }

    const [state,dispatch] = useReducer(authReducer,initialState)
    
    // register user
    const registerUser=  async userData=>{
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res= await axios.post('/register',userData,config)
            dispatch({
             type:SUCCESS_REGISTER,
             payload:res.data
            })
        }catch(err){

            dispatch({
                type:FAIL_REGISTER,
                payload:err.response.data
        })
    }

    }



    // login user
    const loginUser= async userData=>{
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const res= await axios.post('/auth',userData,config)
            dispatch({
             type:SUCCESS_LOGIN,
             payload:res.data
            })
        }catch(err){

            dispatch({
                type:FAIL_LOGIN,
                payload:err.response.data
        })
    }

    }

    const logout=()=>{
        dispatch({
            type:LOG_OUT
        })
    }
    
    const setError = err=>{
        dispatch({
            type:SET_ERROR,
            payload:err
    })
   }
    const clearError = ()=>{
        dispatch({
            type:CLEAR_ERROR
            
    })

}
    
    
    
    return (
      <AuthContext.Provider value={{
          user:state.user,
          userAuth:state.userAuth,
          errors:state.errors,
          getUser: getUser,
          registerUser,
          loginUser,
          logout,
          setError,
          clearError 
          


      }}> {props.children}</AuthContext.Provider>
    )
}

export default AuthState