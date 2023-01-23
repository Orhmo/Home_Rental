import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Landlord from './pages/Landloard';
import Tenants from './pages/Tenants';
import Contact_us from './pages/Contact';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => {

  return (
    <div className="App overflow-hidden">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/"
              exact element={<Home />} />
            <Route path="/landloards"
              element={<Landlord />} />
            <Route path="/tenants"
              element={<Tenants />} />
            <Route path="/contact_us"
              element={<Contact_us />} />
          </Routes>

        <Footer />
      </Router>

    </div>
  )
}

export default App
