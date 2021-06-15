import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import myWonderfulImage from "./imageInSrc.jpg"

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxwidth: "100vw"}}>
      <h1 className="title red">Darine Ben Mahmoud</h1>
      <div>
      <img src={myWonderfulImage}  alt="img1"/>
      </div>
      <br></br>
      <div>
      <img src={"/imageInPublic.jpg"} alt="img2" />
</div>
<br></br>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8pKjULHzs0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
      </div>
   

      
      </header>
    </div>
  );
}

export default App;
