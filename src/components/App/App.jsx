import './App.css';
import Header from "../Header/Header";
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import {Route, Routes, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
