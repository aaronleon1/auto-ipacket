import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Styles/Styles.scss";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <div className="">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/likes" />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
