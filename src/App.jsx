import './App.css';
import Footer from './Components/Footer/Footer';
import { Cards } from './Components/Cards/Cards';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Cards/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
