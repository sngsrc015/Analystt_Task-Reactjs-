import React from 'react'
import ArtisyAi from './Component/ArtisyAi'
// impor
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  return (

<div className='App'>
<Router>
 
 <Routes>
 <Route element={<ArtisyAi/>} path="/"></Route>
 {/* <Route element={<ArtisyAi/>} path="/"></Route> */}

 </Routes>
</Router>
</div>




)
}

export default App