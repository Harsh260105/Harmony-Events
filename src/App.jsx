import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Signin from './pages/Dropdown/Signin/Signin.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Events from './pages/Events/Events.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import SignUp from './pages/Dropdown/Signup/Sign_up.jsx'
import Make_change from './pages/Dropdown/Makechange/Make_change.jsx'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/change-user-info' element={<Make_change />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
