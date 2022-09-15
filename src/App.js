import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMoviePage from "./Pages/DetailMoviePage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import 'antd/dist/antd.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailMoviePage />
              </Layout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
