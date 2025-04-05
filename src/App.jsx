import 'bootstrap/dist/css/bootstrap.min.css';

import './css/reset.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}
