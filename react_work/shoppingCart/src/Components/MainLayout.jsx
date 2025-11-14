import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function MainLayout() {
    return (
        <div>
        {/* <h1>main layout</h1> */}
        <nav style={{backgroundColor:'#db7a18', height: '400px', width: '300px', border: '2px solid red', paddingTop: '200px'}}>
            <Link style={{fontSize: '20px', margin: '10px', color: 'black'}} to={'/login'} >Login</Link>
            <Link style={{fontSize: '20px', margin: '10px', color: 'black'}} to={'/registration'}>Registration</Link>
            

        </nav>
        </div>
    )
}

export default MainLayout
