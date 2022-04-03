import './App.css';
import {Route} from "react-router-dom"
import { Authers } from './Page/Authers';
import { useAuthors } from './hooks/useAuthors';
function App() {
  useAuthors();

  return (
      <>
        <Route path="home" element={<Authers />} />

      </>
  );
}

export default App;
