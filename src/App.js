import './App.css';
import './Style.css';

import img from './imageInSrc.jpg';
import Video2 from './component/video/Video2';
import Video from './component/video/Video';

function App() {
  return (
    <div style={{"paddingLeft":"30px"}}>
    <div style={{"border":"solid 1px noir","maxWidth":"100vw"}}>
    <h1 className="title">Hasnaoui Abdenacer</h1>
    <br />
    
    <br />
    <div className='pad'>
    <img src="./imageInPublic.svg" className="App-logo" alt="logo" />
    <br />
    <img src={img} className="img" alt="img" />
    </div>
  </div>
  <div className='pad'>
    <h2 className='title'> Video interne</h2>
    <Video />
    <h2 className='title'> Video lien externe</h2>
    <Video2 />
    </div>

    </div>
  );
}

export default App;
