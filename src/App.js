import logo from './logo.svg';
import './App.css';
import {Routers ,Route} from "react-router-dom"
import { Home } from '../Page/home';
function App() {
  return (
      <>
        <Route path="/" element={<Home />} />

      </>
  );
}

export default App;
