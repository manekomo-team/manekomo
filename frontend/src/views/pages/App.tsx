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
import EventMouse from '../composnents/EventMouse.tsx';
import WhiteBaloon from '../../img/home/balloon_white.png'
import YellowBaloon from '../../img/home/balloon_yellow.png'
import HeaderMenu from '../composnents/header.tsx';

// import Test3 from './test3.tsx';

function App() {
  return(
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={ <Test /> } />
            <Route path="/test2" element={ <Test2 /> } />
            {/* 新しくページを追加した時 */}
            {/* <Route path="/test3" element={ <Test3 /> } /> */}
          </Routes>
        </BrowserRouter>
      </div>

      <HeaderMenu />

      <div className="baloonMenu">
        <div className="game">
            <a href="#">
                <EventMouse 
                    alt="バルーンメニュー画像" 
                    className="baloonDesign" 
                    beforeSrc={WhiteBaloon} 
                    afterSrc={YellowBaloon} />
            </a>
        </div>
        <div className="quiz">
            <a href="#">
                <EventMouse 
                    alt="バルーンメニュー画像"
                    className="baloonDesign" 
                    beforeSrc={WhiteBaloon} 
                    afterSrc={YellowBaloon} />
            </a>
        </div>
        <div className="study">
            <a href="#">
                <EventMouse 
                    alt="バルーンメニュー画像"
                    className="baloonDesign"
                    beforeSrc={WhiteBaloon} 
                    afterSrc={YellowBaloon} />
            </a>
        </div>
      </div>
    </>
  );
}

export default App;