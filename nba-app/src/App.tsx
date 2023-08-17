import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './screens'
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
