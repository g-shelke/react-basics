import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Counter from './pages/Counter';
import Public from './components/layout/Public';
import From from './pages/From';
import Api from './pages/Api';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/from" element={<From />} />
          <Route path="/fetch-data" element={<Api />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
