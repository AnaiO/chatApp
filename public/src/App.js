import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <header className="border-2 border-white my-8">
        <ul className="flex justify-around text-white rounded-lg">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='signin'>SignIn</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}