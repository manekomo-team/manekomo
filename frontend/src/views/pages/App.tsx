// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/App.css';
import Test from './test.tsx';
import Test2 from './test2.tsx';



function App() {
  return(
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={ <Test /> } />
            <Route path="/test2" element={ <Test2 /> } />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <p>Hello World!</p>
      </div>
    </>
  );
}

export default App;