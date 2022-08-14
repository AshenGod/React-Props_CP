import Profile from './Profile/Profile';
import React from 'react';
import './App.css';

function App() {
  const FullName = 'Elon Musk'
  const Profession = 'CEO of SpaceX'
  const Bio = ['Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers.']
  const handleName=(a)=>{
    return alert(`Welcome ${a} `)
  }
  return (
  <>
    <Profile FullName={FullName} Profession = {Profession} Bio={Bio} handleName={handleName}>
    
    <img src='/Pic1.jpg' alt='Not Found'  width="500" height="500"/>

    </Profile>
  </>
  );
}

export default App;