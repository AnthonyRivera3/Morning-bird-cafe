import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from "./components/footer/Footer.jsx";
import Order from "./components/order/Order.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "1500px" }}>
        <Order />
      </main>

      <Footer />
    </>
  );
}


export default App
