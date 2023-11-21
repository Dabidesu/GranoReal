import React from 'react'; 
import ReactDOM from 'react-dom';
// import Dashboard from 'app-b-dashboard/container' 
// import Page from '../../public/index.html';



function Home (){ 
    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>
      , document.getElementById('root'));
} 
  
export default Home;