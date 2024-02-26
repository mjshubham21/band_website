import React from 'react'
import './Card.css';
import img3 from '../images/img3.jpg';
const Card = (props) => {
  console.log(props);
  return (
    <> {/* React Fragment */}
      <div className='card-container'>
        <div className="image"> 
        <img src={img3} alt="" /></div>
        <h3>NEW YORK</h3>
        <p>18-Oct-2002</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?</p>
        <div className="btn">Buy Tickets.</div>
      </div>
    </>
  )
}

export default Card
