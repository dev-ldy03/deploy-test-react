import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    // {process.env.REACT_APP_BACK_END_URL}
     
      const getDatas  = async ()=>{
      const response = await fetch("https://port-0-deploy-test-ly8jl4snb8401bb5.sel5.cloudtype.app/",{
          method : "POST"
      });
      const datas = response.json();
      return datas;
    }

    getDatas().then(console.log).catch(console.error);
  },[])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
