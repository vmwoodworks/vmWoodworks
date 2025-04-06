import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
