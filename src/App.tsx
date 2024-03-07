// App.js

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DefaultDomainPage from "./pages/DefaultDomainPage";
import UpdatedDomainPage from "./pages/UpdatedDomainPage";

const App = () => {
  return (<Router>
    <Routes>
      <Route
        path="/"
        element={
          <DefaultDomainPage domains={[]} />
        }
      />
      <Route path="/updated" element={<UpdatedDomainPage domains={[]} />} />
    </Routes>
  </Router>)
}

export default App;
