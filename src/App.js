import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';
import Famestate from './Components/Famestate'
import Maps from './Components/Map'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/famestate" element={<Famestate />} />
        <Route path="/map" element={<Maps />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
