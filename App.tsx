import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
  return (
    <div className="main">
      <Header />
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
