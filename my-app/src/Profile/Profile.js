import PropTypes from 'prop-types';
import React from 'react';
const Profile =({children,FullName,Profession,Bio,handleName})=>{
    return(
        <>
        
        <h1> His Name and Last Name is <span> {FullName} </span> </h1>
        <h2> <span> Elon </span> is {Profession} </h2>
        <ul>
                {
                  Bio.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>
            <div className='pic'>
        {
            children
        }     
        <button onClick={()=>handleName('Elon')}>Alert Name</button>
        </div>
        </>
    )
}
export default Profile