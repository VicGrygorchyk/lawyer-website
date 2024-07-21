import './App.css';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header title='Софяк та партнери' phone='0372 555-555' address='місто Чернівці, вулиця Прутська, 16'/>
      <Content carouselInterval={1000} />
      <Footer />
    </div>
  );
}

export default App;
