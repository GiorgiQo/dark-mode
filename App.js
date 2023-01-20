import useDarkMOde from './useDarkModeToggle';
import './App.css';

function App() {
  const [darkMode, toggleDarkMode]= useDarkMOde()
  return (
    <div className="App">
      <button onClick={() => toggleDarkMode()}>Change theme</button>
    </div>
  );
}

export default App;
