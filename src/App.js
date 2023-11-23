// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'; 
// import Link from 'react-router-dom'; 
import Home from './component/home'; 
import About from './component/about'; 
import Contact from './component/contact'; 
import './App.css'; 
  
class App extends Component { 
render() { 
    return ( 
    <Router> 
        <Routes> 
                <Route exact path='/GranoReal' element={< Home />}></Route> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/about' element={< About />}></Route> 
                <Route exact path='/contact-us' element={< Contact />}></Route> 
                <Route exact path='/contact-us/' element={< Contact />}></Route> 
                <Route exact path='/contact-us/ ' element={< Contact />}></Route> 
                <Route exact path='/contact-us/*' element={< Contact />}></Route> 
                <Route path='/contact-us/' element={<Navigate to='/contact-us' />}></Route> 
                <Route path='/contact-us/*' element={<Navigate to='/contact-us' />}></Route> 
                <Route path='*' element={<Navigate to='/' />}></Route> 
        </Routes> 
    </Router> 
); 
} 
} 
  
export default App;
