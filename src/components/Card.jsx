import React from 'react'
import './Card.css';
const Card = (props) => {
  console.log("Data from Card Component :: ",props.data);
  const data = props.data;
  return (
    <> {/* React Fragment */}
      {
        data.map((item, index) => {
        return (
          <div className='card-container' key={index}>
            <img src={item.image} alt='city' className='card_img' />
            <div className='card_info'>
              <h2>{item.city}</h2>
              <h6>{item.date}</h6>
              <p>{item.description}</p>
            </div>
            <div className="btn">Buy Tickets</div>
          </div>
        )
      })
      }
    </>
  )
}

export default Card
