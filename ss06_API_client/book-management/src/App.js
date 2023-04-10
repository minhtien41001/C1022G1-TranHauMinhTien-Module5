import './App.css';
import BookList from './component/BookList';
import CreateBook from './component/CreateBook';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<BookList />} />
      <Route path='book/create' element = {<CreateBook />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
