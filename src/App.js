import Navigation from './Navigation';
import Header from './Header';
import './App.css';

function App() {
  const data = [
    {home:"Home", band:'Band', tour:"Tour", contact : 'Contact'}
  ];
  return (
    <div>
      <Navigation value={data[0].home} valueone={data[0].band} valuetwo={data[0].tour} valuethree={data[0].contact}/>
      <Header/>
    </div>
  );
};
export default App;
