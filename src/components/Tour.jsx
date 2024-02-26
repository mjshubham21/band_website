import React from 'react';
import './Tour.css';
import Card from './Card';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

const Tour = () => {
  const data =[{
    image: img3,
    city: 'New York',
    date: '18-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  },
  {
    image: img4,
    city: 'Los Angeles',
    date: '20-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  },
  {
    image: img5,
    city: 'Chicago',
    date: '22-Oct-2002',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium id maxime?'
  },
]
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
