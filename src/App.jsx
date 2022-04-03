import './App.css';
import {Route,Routes} from "react-router-dom"
import { Authers } from './Page/Authers';
import { useAuthors } from './hooks/useAuthors';
import { useEffect } from 'react';
function App() {


  // useAuthors();
  
  return (
    <Routes>
      <Route path="home" element={<Authers />} />
    </Routes>
  );
}

export default App;
