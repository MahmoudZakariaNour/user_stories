import './App.css';
import {Route,Routes} from "react-router-dom"
import { Authers } from './Page/Authers';
import { useAuthors } from './hooks/useAuthors';
function App() {


  // useAuthors();
  
  return (
    <Authers/>
    // <Routes>
    //   <Route path="home" element={<Authers />} />
    // </Routes>
  );
}

export default App;
