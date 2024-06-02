import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';
import About from './pages/About';
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/sign-out' element={<SignOut/>}></Route>
      <Route path='/sign-in' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignUp/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
}
