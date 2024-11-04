import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup2 from './components/Signup2'
import Login from './components/login'  
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/signup" element={<Signup2 />}></Route>
      <Route path ="/login" element={<Login />}></Route>
    </Routes>
    </BrowserRouter>

  )
}


export default App
