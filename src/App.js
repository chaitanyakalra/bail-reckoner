import logo from './logo.svg';
import './App.css';
// import Home from '../src/components/Home/home.jsx'
import Home from './screens/Home/home.jsx'
import Login from './screens/Login/login.jsx';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
    </div>
  );
}

export default App;
