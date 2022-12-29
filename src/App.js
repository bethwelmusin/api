import React, {useState} from 'react';
import './App.css';
import  Axios  from 'axios';

function App() {
  const [joke, setJoke] = useState("");
  const getjoke = () => {
      Axios.get("https://official-joke-api.appspot.com/random_joke").then(
        (response) => {
      console.log(response);

      setJoke(response.data.setup + "..." + response.data.punchline);

    });

  }
  return (
    <div className="App">
      <button onClick={getjoke}> click to get jokes</button>
      {joke}
    </div>
  );
}

export default App;
