import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import ViewPost from './Components/ViewPost'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewpost" element={<ViewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
