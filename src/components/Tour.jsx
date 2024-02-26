import React from 'react';
import './Tour.css';
import Card from './Card';

const Tour = () => {
  const data =[{
    city: 'New York',
    date: '18-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  },
  {
    city: 'Los Angeles',
    date: '20-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  },
  {
    city: 'Chicago',
    date: '22-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  
  }]
  return (
    <div className='tour'>
      <h1 className='tour1'>TOUR DATES</h1>
      <h6 className='tour2'>Remember to book your tickets!</h6>
      <p className='tour4'>September <span className='tour3'>Sold out</span></p>
      <p className='tour4'>September <span className='tour3'>Sold out</span></p>
      <p className='tour4'>September <span className='tour3'>Sold out</span></p>
      <Card data={data} />
    </div>
      
  )
};

export default Tour;
