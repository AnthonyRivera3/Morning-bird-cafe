import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from "./components/footer/Footer.jsx";
import Order from "./components/order/Order.jsx";
import Hero from "./components/hero/Hero.jsx";

function App() {
  
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Order />
      </main>

      <Footer />
    </>
  );
}


export default App
