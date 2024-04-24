import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/LoginComp';
import NavBar from './components/NavBarComp';
import HomeComp from './components/HomeComp';
import NotFound from './components/NotFoundComp';
import ProdDet from './components/ProdDet';
import prodContext from './store/prod-context';

function App() {
  const [data, setData] = useState([]);
  const [errFlag, setErrFlag] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/getProd")
      .then(res => {
        if(res.status === 200) {
          return res.json();
        } else {
          throw new Error("Error!!");
        }
      })
      .then(json => {
        setData(json);
      })
      .catch((err) => {
        setErrFlag(true);
      })
      // console.log(data);
  }, []);

  return (
    <div className="App">
      <prodContext.Provider value={{data, errFlag}}>
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
      </prodContext.Provider>
    </div>
  );
}

export default App;
