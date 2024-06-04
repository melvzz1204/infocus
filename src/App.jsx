import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home.jsx";
import Dashboard from "../admin/Admin_panel.jsx";
import Admin from "../admin/Admin_Login.jsx";
import Announcement from "../admin/Admincomponent/Announcement.jsx";
import ManagePost from "../admin/Admincomponent/ManagePost.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="admin" element={<Admin />}></Route>
          <Route path="Admin/Admin_panel" element={<Dashboard />}>
            <Route path="Announcement" element={<Announcement />}></Route>
            <Route path="ManagePost" element={<ManagePost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
