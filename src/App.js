import './App.css';
import Banner from './components/Home/Banner/Banner';
import Header from './components/Home/Header/Header';
import Intro from './components/Home/Intro/Intro';
import Property from './components/Home/Property/Property';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <Intro />
      <Property />
    </div>
  );
}

export default App;
