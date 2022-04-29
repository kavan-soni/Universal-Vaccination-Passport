
import './App.css';
import Appbar from './components/Appbar'
import Student from './components/Student'
import backimage from "./images/back.jpg";


function App() {
  return (

    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+backimage+')',
      backgroundSize: "cover",
      height: "200vh",
      color: "#f5f5f5",
      
      backgroundRepeat: 'no-repeat'
    }}
  >

    <div className="App">
    <Appbar/>
    <Student/>
   
    </div>
    </div>
  );
}

export default App;

