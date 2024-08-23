import React from 'react'
import Typewriter from "typewriter-effect";
import './ballAni.css'

export default function BallAni() {
  return (
    <div className='animation-container p-3'>
         <div className="typewriter-container">
        <h1 className='typeofsubcard'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Start Your Journey Today!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Unlock Your Potential With Our Course,Gaining The Skills You Need To Excel In Your Career!")
                .start();
            }}
          />
        </h1>
      </div>
         {[...Array(10)].map((_, index) => (
          <div key={index} className="bouncing-ball"></div>
        ))}
    </div>
  )
}
