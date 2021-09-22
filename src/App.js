import logo from './logo.jpg';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Profile />
      </div>
    </div>
  );
}

export default App;
