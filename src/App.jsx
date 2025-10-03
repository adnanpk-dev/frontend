import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import EditePost from "./pages/EditePost";



function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:user/:id" element={<Articles />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/create" element={<Create />} />
      <Route path="/admin/edit/:id" element={<EditePost />} />
    </Routes>
    
  
    </>
  )
}

export default App
