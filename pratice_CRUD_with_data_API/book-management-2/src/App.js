
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import BookList from './component/BookList';
import CreateBook from './component/CreateBook';
import EditBook from './component/EditBook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<BookList />} />
      <Route path="book/create" element = {<CreateBook />} />
      <Route path="book/edit/:id" element = {<EditBook />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
