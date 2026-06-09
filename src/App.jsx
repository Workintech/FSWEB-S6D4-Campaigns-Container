import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
/* ADIM 2? */

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        Carousel Buraya Gelecek
        {/* ADIM 3: Offer component'ini burada kullanabilirsin */}
      </div>
      <Footer />
    </>
  );
}

export default App;
