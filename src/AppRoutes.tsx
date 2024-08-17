import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Navbar from './components/Navbar';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    </Router>
  );
};

export default AppRoutes;
