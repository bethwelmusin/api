// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Create from "./Create";
// import Update from "./Update";

// const Home = () => {
//   return (
//     <Router>
//       <div className="App">
//         <ul>
//           <li>
//           </li>
//           <li>
//             <Link to="/Create">Create</Link>
//           </li>
//           <li>
//             <Link to="/Read">Read</Link>
//           </li>
//         </ul>
//       </div>

//       <Route exact path="/" element={<Home />}></Route>
//       <Route exact path="/about" element={<Create />}></Route>
//       <Route exact path="/contact" element={<Update />}></Route>
//     </Router>
//   );
// };

// export default Home;

import React from "react";

import "../components/style.css";
const Home = () => {
  return (
      <div className="home">
         <h1>homepage</h1>
      </div>
  );
};

export default Home;
