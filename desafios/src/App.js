import Content1 from "./components/Content1";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";


function App() {
  return ( 
    <div className = 'container-fluid'>
      <NavBar/>
      <div className="d-flex">
      <SideBar/>
      <Content1/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
