import './App.css';
import './Style.css';
import logo from './logo.svg';
import img from './image1.jpg';
import Video2 from './component/video/Video2';
import Video from './component/video/Video';

function App() {
  return (
    <div style={{"paddingLeft":"30px"}}>
    <div style={{"border":"solid 1px noir","maxWidth":"100vw"}}>
    <h1 className="title">Hasnaoui Abdenacer</h1>
    <br />
    
    <br />
    <img src={logo} className="App-logo" alt="logo" />
    <br />
    <img src={img} className="img" alt="img" />
  </div>
    <h2 className='title'> Video interne</h2>
    <Video />
    <h2 className='title'> Video lien externe</h2>
    <Video2 />

    </div>
  );
}

export default App;
