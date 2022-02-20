import React from 'react';
import {useNavigate} from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  
  return (
    <div>
       <h1 style={{color:'orange',marginLeft: '36%'}}>This is the Home page. Welcome </h1> 
       <h3 style={{color:'blueviolet'}}> Pontzer’s skill as a popularizer can rankle some of his colleagues. His message that exercise won’t help you lose weight “lacks nuance,” says exercise physiologist John Thyfault of the University of Kansas Medical Center, who says it may nudge dieters into less healthy habits.

But others say besides busting myths about human energy expenditure, Pontzer’s work offers a new lens for understanding human physiology and evolution. As he wrote in Burn, “In the economics of life, calories are the currency.”

“His work is revolutionary,” says paleoanthropologist Leslie Aiello, past president of the Wenner-Gren Foundation, which has funded Pontzer’s work. “We now have data … that has given us a completely new framework for how we think about how humans adapted to energetic limits.”

       </h3>
       <button style={{color:'blueviolet', backgroundColor:'lightgreen', marginLeft: '50%'}} onClick={() =>{navigate('/profile')}}> Login </button>
       </div>
  )
}

export default Home;