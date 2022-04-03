import './App.css';
import {Route,Routes} from "react-router-dom"
import { Authers } from './Page/Authers';
import { AutherDetails } from './Page/AutherDetails';
function App() {


  // useAuthors();
  
  return (
    <Routes>
      <Route path="home" element={<Authers />} />
      <Route path="home/:AuthId" element={<AutherDetails />} />
    </Routes>
  );
}

export default App;
