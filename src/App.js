import Card from './components/Card/Card.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HealthBar from './components/HealthBar/HealthBar.js';

function App() {
  return (
    <div>
      <Header></Header>
      <HealthBar></HealthBar>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
