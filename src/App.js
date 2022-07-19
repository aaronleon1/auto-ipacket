import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Styles/Styles.scss";
import Home from "./Pages/Home";
import ContextWrapper from "./Components/ContextWrapper";
import Liked from "./Pages/Liked";
function App() {
  return (
    <Router>
      <div className="">
        <Layout>
          <ContextWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/likes" element={<Liked />} />
            </Routes>
          </ContextWrapper>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
