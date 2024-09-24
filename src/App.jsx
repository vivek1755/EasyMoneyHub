import React from 'react'
import Home from './assets/Components/Home'
import Aboutus from './assets/Components/Aboutus'
import Contactus from './assets/Components/Contactus'
// import More from '../src/assets/Components/More'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    
    <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
          <Route path="/Contactus" element={<Contactus/>}/>
          </Routes>

    </Router>
    

 





  )
}

export default App










  //  <div>
  //     <Home/>
  //     {/* <Aboutus/> */}
  //     {/* <Contactus/> */}
  //     {/* <More/> */}

     



  //   </div>