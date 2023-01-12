import logo from './logo.svg';
import './App.css';
import { FeedsPage } from './pages/feed';
import { Navbar } from './navbar/navbar';
import { Routing } from './routes/routes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routing/>
    </div>
  );
}

export default App;
