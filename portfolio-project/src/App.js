import logo from './logo.svg';
import './App.css';
import Quote from './Quote/Quote.js';
import TodoApp from './Todo/TodoApp';
import {TodoContextProvider} from './Todo/TodoContext';
import Cart from './E-commerce/Cart';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './Portfolio/HomePage';
import Timer from './Timer/Timer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<HomePage/>}></Route>
          <Route path = '/timer' element = {<Timer/>}></Route>
          <Route path = '/quote' element = {<Quote/>}></Route>
          <Route path = '/todo' element = {<TodoContextProvider><TodoApp/></TodoContextProvider>}></Route>
          <Route path = '/ecom' element = {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
