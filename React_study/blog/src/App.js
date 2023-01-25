import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'test text';
  return (
    <div className="App">

      <div className="background">
        <h1 style={{color : 'red', fontSize : '16px'}}>Test Site</h1>
      </div>
      <p>{ post }</p>
      <div></div>
    </div>
  );
}

export default App;
