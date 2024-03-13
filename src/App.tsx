import "./App.css";
import Achivements from "./components/Achivements";
import Calender from "./components/Calender";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";
import Updates from "./components/Updates";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achivements />
      <Calender />
      <Customers />
      <Updates />
      <Footer />
    </>
  );
}

export default App;
