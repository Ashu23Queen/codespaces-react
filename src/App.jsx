import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
//import { BrowserRouter as Router ,Routes ,Route ,Link} from 'react-router-dom';
//import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';



function App() {
  return (
    <>
    <TopBar/>
      <Register/>    
    </>
  );
}

export default App;
