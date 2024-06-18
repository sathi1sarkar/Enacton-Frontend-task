
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeLayout from './pages/HomeLayout';
import { SLIDER } from './component/SLIDER';
import Jetha from './component/ProductSlider';
export function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/kaka" element={<HomeLayout/>} /> */}
          <Route path='kaka' element={<HomeLayout/>}/>
          <Route path='/Jetha' element={<Jetha/>}/>

        </Routes>
      </Router>
    </>
  )
}
