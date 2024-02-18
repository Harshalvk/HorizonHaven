import {Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast' 

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignOut/>}/>
      </Routes>
    </>
  )
}

export default App
