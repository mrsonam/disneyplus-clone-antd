import './App.less';
import BgDiv from './components/BgDiv';
import Bundle from './components/Bundle';
import FAQ from './components/FAQ';
import FavoriteDevices from './components/FavoriteDevices';
import FavoriteShows from './components/FavoriteShows';
import Footer from './components/Footer';
import Header from './components/Header';
import Mockup from './components/Mockup';

function App() {
  return (
    <div className="App">
      <BgDiv/>
      <FavoriteShows/>
      <Mockup/>
      <Bundle/>
      <FavoriteDevices/>
      <Footer/>
    </div>
  );
}

export default App;
