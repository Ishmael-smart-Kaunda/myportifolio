import Home from "./assets/pages/home"
import Contact from "./assets/pages/contact"
import { BrowserRouter, Routes, Route } from "react-router"
const App= ()=>{
      return (
               <BrowserRouter>
                  <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="contact" element={<Contact/>}/>
                  </Routes>
               </BrowserRouter>
      )
}
export default App