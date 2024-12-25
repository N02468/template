import Index from './pages/index'
import About from './pages/about'
import Gallery from './pages/gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
 
  return (
    <Router>
    <Routes>
      <Route path='/index' element={<Index home="Home" menu="menu" gallery="gallery" Reservation="Reservation" coffee="coffee"/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
 

    </Routes>
    </Router>
  )
}

export default App
