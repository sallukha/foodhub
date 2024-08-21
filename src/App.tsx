import Navbar from "./Componenets/Navbar";
 
import Qatugary from "./pages/Qatugary";
import Catugry3 from "./Componenets/Catugry3";
import Middlecatugury from "./Componenets/Middlecatugury";
import Lastcatugary from "./Componenets/Lastcatugary";
import Footer from "./pages/Footer";
export default function App() {
  return (
    <main className="px-16 pt-5">
      <Navbar />
      <Footer />
      <Qatugary />
      <Catugry3 />
      <Middlecatugury />
      <Lastcatugary />
      
    </main>
  );
}
