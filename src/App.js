import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import AppBarBottom from './components/AppBarBottom';
import { Home } from './components/Home';
import Left from './components/Left';
import Middle from './components/Middle';
import NavBar from './components/NavBar';
import Right from './components/Right';

// '/' goes to localhost3000
function App() {

  return (

    <>

  <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='left' element={<Left />}></Route>
      <Route path='middle' element={<Middle />}></Route>
      <Route path='right' element={<Right />}></Route>

    </Routes>
    <AppBarBottom />

    </>
  );
}

export default App;





