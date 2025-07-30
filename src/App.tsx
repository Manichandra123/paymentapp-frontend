import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'

import Dashboard from './pages/dashbord'
import Sendmoney from './ui/components/sendmoney'
import LandingPage from './pages/landing'
 
function App() {

  return (
    <> 
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element ={<Signup/>}  > </Route>
    <Route path='/signin' element ={<Signin/>}></Route>
    <Route path='/dashboard' element ={<Dashboard/> }></Route>
    <Route path='/sendmoney' element ={<Sendmoney/>} />
    <Route path='/' element ={<LandingPage/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
   
}

export default App
