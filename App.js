import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './Home';
import "./Home.css";
import Footer from './Footer';
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDynamicInput from './AddDynamicInput';
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Home />
      </div>
      {/* <div className="App"> */}
      <Footer />
    </div>
  );
}


export default App;
