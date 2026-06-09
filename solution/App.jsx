import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Offer from './components/Offer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        <Offer />
      </div>
      <Footer />
    </>
  );
}

export default App;
