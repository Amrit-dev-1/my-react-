import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import './App.css';
import Chai from './chai';
import Navbar from './Navbar'; 
import Slider from './Slider';
import Footer from './Footer';
import Card from './Card';

function App() {
  return (
    <>
      <Navbar /> 

      <Slider/>

      <Card/>

      <Footer />
    </>
  );
}

export default App;
