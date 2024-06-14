import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Set basename here */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
