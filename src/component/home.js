import React from 'react'; 
import ReactDOM from 'react-dom';
// import Dashboard from 'app-b-dashboard/container' 
// import Page from '../../public/index.html';



function Home (){ 
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    return ReactDOM.render(process.env.PUBLIC_URL, document.getElementById('root'));
} 
  
export default Home;