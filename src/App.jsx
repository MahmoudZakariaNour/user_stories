import './App.css';
import {Route,Routes} from "react-router-dom"
import { AutherDetails } from './Page/AutherDetails';
import { PostPage } from './Page/PostPage';
import { PostDetails } from './Page/PostDetails';
import { Home } from './Page/Home';
import { Authors } from './Page/Authers';
import { Navbar } from './Components/Navbar';
function App() {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Authors />} />
      <Route path="home/:AuthId" element={<AutherDetails />} />
      <Route path="posts" element={<PostPage />} />
      <Route path="posts/:PostId" element={<PostDetails />} />
    </Routes>
    </>
  );
}

export default App;
