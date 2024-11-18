import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Forms from './component/home.js/homecomponent/Forms';
import NavbarHomecomponet from './component/home.js/homecomponent/NavbarHomecomponet';
import Read from './component/Read';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavbarHomecomponet />
    <Routes>
      <Route exact path='/' element={<Forms />}></Route>
      <Route exact path='/Read' element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
