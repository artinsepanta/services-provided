import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import UserForm from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Router />
    </BrowserRouter>
  );
}



export default App;
