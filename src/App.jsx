import './App.css';
import {Routers ,Route} from "react-router-dom"

import { Authers } from './Page/Authers';
function App() {
  return (
      <>
        <Route path="/Home" element={<Authers />} />

      </>
  );
}

export default App;
