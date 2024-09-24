import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import OtherScreen from "./screens/OtherScreen/OtherScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/other" element={<OtherScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
