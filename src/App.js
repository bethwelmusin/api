// import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
// import Axios from "axios";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import "./App.css";


// function App() {
//   const [joke, setJoke] = useState("");
//   const getjoke = () => {
//     Axios.get("https://official-joke-api.appspot.com/random_joke").then(
//       (response) => {
//         console.log(response);

//         setJoke(response.data.setup + "..." + response.data.punchline);
//       }
//     );
//   };
//   return (
//     <div className="container">
//      <Create />

//       <button onClick={getjoke}> click to get jokes</button>
//       {joke}

//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Create/">Create</Link>
          </li>
          <li>
            <Link to="Read/">Read</Link>
          </li>
          <li>
            <Link to="Update/">Update</Link>
          </li>
        </ul>
      </div>
       <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Create" element={<Create />}></Route>
          <Route exact path="/Read" element={<Read />}></Route>
          <Route exact path="/Update" element={<Update />}></Route>

       </Routes>
    </Router>
  
  );
};

export default App;
