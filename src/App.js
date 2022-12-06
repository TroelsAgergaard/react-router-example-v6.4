import "./App.css";
import Navigation from "./Templates/MyNavigation";
import MyHeader from "./Templates/MyHeader";
import MyFooter from "./Templates/MyFooter";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyHeader>
        <Navigation />
      </MyHeader>
      <div className="content">
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
