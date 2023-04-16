import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<StudentList />} />
        <Route path='/students/create' element = {<CreateStudent />} />
        <Route path='/students/edit/:id' element = {<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
