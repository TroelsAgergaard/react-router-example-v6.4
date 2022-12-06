import "./App.css";
import NavItem from "./Components/NavItem";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <nav style={{ width: "300px" }}>
          <ul className="NavItem">
            <li>
              <NavItem title="Hjem" />
            </li>
            <li>
              <NavItem title="Om os" />
            </li>
            <li>
              <Link to="/kontakt">
                <NavItem title="Kontakt" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
