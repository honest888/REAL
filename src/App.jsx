import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calcoli from "./pages/Calcoli";
import Proprietari from "./pages/Proprietari";
import ViewPropritari from "./pages/ViewPropritari";
import EditPropritari from "./pages/EditPropritari";
import Dashboarod from "./pages/Dashboarod";
import Conduttori from "./pages/Conduttori";
import Fornitori from "./pages/Fornitori";
import Rate from "./pages/Rate";
import RegisterContainer from "./components/Autenticazione/registrazione/register-containter.components";
import LoginContainer from "./components/Autenticazione/login/login-container.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboarod />} />
      <Route path="propriietari" element={<Proprietari />} />
      <Route path="propriietari-view" element={<ViewPropritari />} />
      <Route path="propriietari-edit" element={<EditPropritari />} />
      <Route path="conduttori" element={<Conduttori />} />
      <Route path="fornitori" element={<Fornitori />} />
      <Route path="rate" element={<Rate />} />
      <Route path="calcoli" element={<Calcoli />} />
      <Route path="register/*" element={<RegisterContainer />} />
      <Route path="login/*" element={<LoginContainer />} />
    </Routes>
  );
}

export default App;
