import "./App.css";
import Achivements from "./components/Achivements/Achivements";
import Calender from "./components/Calender";
import Clients from "./components/Clients";
import Community from "./components/Community/Community";
import Customers from "./components/Customers";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";
import Updates from "./components/Updates/Updates";

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
