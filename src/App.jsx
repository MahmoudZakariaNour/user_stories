import logo from './logo.svg';
import './App.css';
import { useAuthors } from './hooks/useAuthors';
function App() {
  useAuthors();

  return (

    <div className="App">

    </div>
  );
}

export default App;
