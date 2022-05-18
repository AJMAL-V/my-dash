import React from 'react';
import FirstPage from './component/FirstPage';
import {  Routes,  Route,} from "react-router-dom";
import SecondPage from './component/SecondPage';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<FirstPage/>}></Route>
      <Route path="/SecondPage" element={<SecondPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
