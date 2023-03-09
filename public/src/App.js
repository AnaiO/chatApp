import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Layout/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
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