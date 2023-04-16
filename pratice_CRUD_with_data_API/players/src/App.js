import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPlayer from './components/ListPlayer';
import Createplayer from './components/Createplayer';
import EditPlayer from './components/EditPlayer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<ListPlayer />} />
      <Route path='/players/create' element = {<Createplayer />} />
      <Route path='/players/edit/:id' element = {<EditPlayer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
