import React from 'react'
import './profile.css';
function Profile({data}) {
    return (
        <div className='container'>
            <h3>This is my Profile Page</h3>
            <img src={data.pic} height='200' width='200' alt="" style={{ borderRadius: '200px' }}
            />
            <h2>Name: {data.name}</h2>
            <h2>Branch: {data.branch}</h2>
            <h2>Section: {data.section} </h2>
            <h2>College: {data.college}</h2>

        </div>     
    )
}

export default Profile
