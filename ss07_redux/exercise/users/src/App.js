import './App.css';
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import User from './component/User';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
