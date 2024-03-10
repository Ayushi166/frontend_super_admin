import { useLocation } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const location = useLocation();
  const withoutSidebar = ["/"];
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className={`${withoutSidebar.includes(location.pathname)?"d-none":"col-lg-2 col-md-2 col-sm-12 h-100 p-0"}`} style={{background:"#fff",border:"1px solid #E8E8E8"}} >
          <Sidebar/>
        </div>
        <div className={`${withoutSidebar.includes(location.pathname)?"col-12":"col-lg-10 col-md-10 col-sm-12 p-0 h-100"}`} style={{height:"100vh",overflowY:"auto",background:"#FAFBFF"}} >
          <AllRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;
