// import React,{useContext} from 'react'
// import AuthContext from '../../context/authContext/authContext'

// const Navbar = () => {
//   const {logout,clearError}= useContext(AuthContext)

//   const onLogout =()=>{
//     logout()
//     clearError()
//   }
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <h1><i className='fas fa-glass-cheers' />
//           Party RSVP
//         </h1>
//         <p>Made with <span>❤</span> by Shubham</p>
//       </div>
//       <ul>
//         <li>Hello, Shubham</li>
//         <span className="sm-hide">|</span>
//         <li>
//           <a href="#!">
//             <span className="sm-hide" onClick={onLogout}>Logout</span>
//             <i className="fas fa-sign-out-alt"></i>
//           </a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar

import React , {useContext, Fragment} from 'react'
import AuthContext from '../../context/authContext/authContext'
import{Link} from 'react-router-dom'

const Navbar=()=> {
    const {logout , clearError, userAuth,user} = useContext(AuthContext)

    const onLogout = () => {
        logout()
        clearError()
    }

    const userLinks = (
        <Fragment>
         <li>Hello,{user && user.name}</li>
                <span className="sm-hide">I</span>
                <li>
                    <a href="#!" onClick = {onLogout}>
                    <span className="sm-hide">Logout</span> 
                    <i className="fas fa-sign-out-alt"></i>   

                    </a>
                </li>
        </Fragment>

    )

    const authLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
                    <span className="sm-hide">|</span> 
            <li>
                <Link to='/login'>LogIn</Link>
            </li>
        </Fragment>
    )    
    return (
        <div className="navbar">
            <div className="logo">
                <h1><i class="fas fa-glass-cheers"></i>Party</h1>
            <p>Made with <span>❤️</span> by Mu Idrees</p>
            </div>
            <ul>
            {userAuth ? userLinks: authLinks}
            </ul>
            
        </div>
    )
}

export default Navbar