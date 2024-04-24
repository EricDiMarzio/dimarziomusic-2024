import './sass/main.scss';
import './sass/about.scss';
import './sass/_navigation.scss'
import './sass/contact.scss'
import './sass/shopnow.scss'
import './sass/_footer.scss';
// import './sass/carousel.scss'
import Header from './Components/Header';
import Education from './Components/Education';
import Worship from './Components/Worship';
import Navbar  from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ShopNow from './Components/ShopNow';

function App() {
  return (
    <div className="App">
      <ShopNow />
      <Navbar />
     <Header />
     <Education />
     <Worship />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;


