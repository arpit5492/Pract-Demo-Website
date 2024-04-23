import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './components/LoginComp';
import NavBar from './components/NavBarComp';
import HomeComp from './components/HomeComp';
import NotFound from './components/NotFoundComp';
import ProdDet from './components/ProdDet';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomeComp />}/>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />}/>
          <Route path='product'>
            <Route path=':id' element={<ProdDet />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
