import 'bootstrap/dist/css/bootstrap.min.css';

import './css/reset.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App() {

  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}
