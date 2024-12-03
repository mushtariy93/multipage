import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Company from "./pages/company/Company";
import Career from "./pages/career/Career";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import Login from "./pages/login/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
