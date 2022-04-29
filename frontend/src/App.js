
import './App.css';
import Appbar from './components/Appbar'
import Student from './components/Student'
import backimage from "./images/back.jpg";

function App() {
  return (

    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+backlimage+')',
      backgroundSize: "cover",
      height: "280vh",
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

