import './App.css'
import Search from './components/Search'
import User from './components/User'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <main>
      <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/user/:user" element={<User />} />
        </Routes>
    </main>
  )
}

export default App
