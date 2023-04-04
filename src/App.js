import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/login';
import Loginn from './components/loginn';
import Signup from './components/Sigup';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginn" element={<Loginn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/table1" element={<Table1 />} />
      <Route path="/table2" element={<Table2 />} />
    </Routes>
  </BrowserRouter>
    
  )
}
export default App;