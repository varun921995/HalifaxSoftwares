import "./App.css";
import NavMenu from "./Components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
import MainContent from "./MainContent";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <NavMenu />
      <MainContent />
      <Footer></Footer>
    </>
  );
}

export default App;
