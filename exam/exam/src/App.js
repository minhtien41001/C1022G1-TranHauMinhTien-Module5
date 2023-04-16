
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/books/create' element={<Create />} />
        <Route path='/books/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
