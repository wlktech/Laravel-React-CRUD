import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar } from './pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { Edit } from './pages/Edit';
import { View } from './pages/View';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
