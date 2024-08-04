import './App.css';
import Burger from './components/Burger'
import NavBar from './layouts/NavBar';
function App() {
  return <>
    <NavBar/>
    <div className="burgerContent">
      <Burger />
    </div>
    </>
}

export default App;
