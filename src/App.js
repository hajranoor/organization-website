import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './assets/dummy-logo.jpg';
import mountains from './assets/mountains.jpg';
import Home from './components/home';
import NavComp from './components/NavComp';
import Login from './components/login';
import Signup from './components/signup';
import OurTeam from './components/ourTeam';
import AddTeam from './components/addTeam';

import Header from './header';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <h1>is it working</h1> */}
      {/* <Header logoUrl= './assets/dummy-logo.jpg' mountainsUrl = './assets/mountains.jpg' /> */}
      {/* <NavComp/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <OurTeam/> */}
      {/* <AddTeam/> */}
      {/* <Signup/> */}
      {/* <NavBar />
      <Routes>
        <Route path = "/first" element={<h1>this is first option</h1>} />
        <Route path = "/second" element={<h1>this is second option</h1>} />
      </Routes> */}
      {/* </BrowserRouter> */}

      <BrowserRouter>
      <AddTeam/>
      {/* <Signup/> */}
      {/* <NavComp/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/signin" element={<Login />} />

        </Routes> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
