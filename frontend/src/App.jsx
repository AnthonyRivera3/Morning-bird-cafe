import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "1500px" }}>
        <h1>My Website</h1>
      </main>

      <Footer />
    </>
  );
}


export default App
