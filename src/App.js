import Navigation from './Navigation';
import Header from './Header';
import  Band from './Band';
import './App.css';
import './para.css'

function App() {
  const data = [
    {home:"Home", band:'Band', tour:"Tour", contact : 'Contact'},
    {head:"THE BAND" ,span:"We love Music", para:"we have create a fictional band Website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam, facilis iste laboriosam rem reprehenderit non nesciunt impedit earum officia exercitationem consequatur magnam maiores quidem, est modi ipsum odio explicabo. "},

  ];
  return (
    <div>
      <Navigation value={data[0].home} valueone={data[0].band} valuetwo={data[0].tour} valuethree={data[0].contact}/>
      <Header/>
      <Band hone={data[1].head} sone={data[1].span} pone={data[1].para}/>
      
    </div>
  );
};
export default App;
