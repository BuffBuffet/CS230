import logo from './logo.svg';
import './App.css';
import MakeCard from "./Card.js";
import MakeNav from './Navbar.js';

function App() {
  return (
    <div className="App">
      <MakeNav />
      <h1> CS 230L </h1>
      <h2> Section - 01 </h2>
      <p>WVU ID:800336410</p>
      <p>Hi I am Yechan Kweon</p>
      <ul>
        <li style={{display: 'inline-block' }}><MakeCard title="Card 1" color="blue"/></li>
        <li style={{display: 'inline-block'}}><MakeCard title="Card 2" color="red"/></li>
        <li style={{display: 'inline-block'}}><MakeCard title="Card 3" color="green"/></li>
      </ul>

    </div>
  );
}

export default App;

