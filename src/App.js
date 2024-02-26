import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Band from './components/Band';
import Images from './components/Images';
import Tour from './components/Tour';
import './App.css';

function App() {
  const data = [
    {home:"Home", band:'Band', tour:"Tour", contact : 'Contact'},

  ];
  return (
    <div>
      <Navigation value={data[0].home} valueone={data[0].band} valuetwo={data[0].tour} valuethree={data[0].contact}/>
      <Header/>
      <Band/>
      <Images/>
      <Tour/>
      
    </div>
  );
};
export default App;
