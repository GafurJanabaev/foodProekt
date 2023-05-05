import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./screens/Home/Home"

function App() {

  return (
   <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home/>} />
      </Route>
   </Routes>
  )
}

export default App
