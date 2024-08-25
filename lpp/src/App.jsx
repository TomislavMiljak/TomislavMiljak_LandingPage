import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import profilna from "./assets/profilna.png"
//import kruh from "./assets/kruh.png"


import './App.css'
import CV from "./assets/Tomislav_Miljak_CV_24082024.pdf"

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="container content"> 
      <div className='profile-container'>
      <p><b>I'm looking for work to be able to provide for my child and family.</b></p>
      <a src={CV}><img src={profilna} style={{width: "18rem", height: "15rem", borderRadius: "10px"}}/></a>
      <p style={{color: "black", fontWeight: "bold"}}><b>Tomislav Miljak</b></p>
      <p style={{fontWeight: "bold", color: "black"}}><b> tomislavmiljak@yahoo.com</b></p>
      <p style={{fontWeight: "bold", color: "black"}}><b>https://github.com/TomislavMiljak</b></p>
      <p style={{fontWeight: "bold", color: "black"}}><b>www.linkedin.com/in/tomislav-miljak-5a6548324/</b></p>
      
      </div>
      
      <div className='text-container'>
      
       <div className='one'>
        <p>I have moved to Berlin in 2023 with my family, and started remotely learning web-development through the Digital Career Institute one year course.</p>
        <p>Previously, I have worked as a psychologist for over 10 years in Croatia.</p>
        <p>My main interests are music and psychology, but I like photography too.</p>
      </div>
      <div className="two">
      <p>You can check some of the music I like <a style={{color: "black", fontWeight: "bolder"}} href="https://one1thjune-3o06.onrender.com/">here.</a></p>
        <p>Some of the music I've made is available through my <a style={{color: "black", fontWeight: "bolder"}} href="https://www.youtube.com/@netkonetkovic213/videos">youtube channel.</a></p>
        <p>Some of the recent photos and my other artwork are available through the <a style={{color: "black", fontWeight: "bolder"}} href="https://tomislavmiljak.github.io/netko-attempt/">netko netkovic landing page.</a> </p>
      </div>
      <div className="three">
      <p>You can find some of my projects deployed on GitHub or Render using the links below:</p>
      <div className="links-container">
      <p><a style={{color: "black", fontWeight: "bolder"}} href="https://deliveats-food-delivery-app.onrender.com/"> - DCI GROUP FINAL PROJECT - DELIVEATS - Food delivery App</a></p>
        <p><a style={{color: "black", fontWeight: "bolder"}} href="https://pre-math-skills-app-try.onrender.com"> - Pre-Math-Skills-App</a></p>
        <p><a style={{color: "black", fontWeight: "bolder"}} href="https://tomislavmiljak.github.io/uib-project/"> - Small site on Healty living habits</a></p>
        <p><a style={{color: "black", fontWeight: "bolder"}} href="https://tomislavmiljak.github.io/CMG/"> - Crazy Melons Game</a></p>
        <p><a style={{color: "black", fontWeight: "bolder"}} href="https://tomislavmiljak.github.io/trial/"> - Short article about the Stroop Effect</a></p>  
      </div>
      </div>  
        
      
      

      </div>

      
      
      </div>
    </>
  )
}

export default App
