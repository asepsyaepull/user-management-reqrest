import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DetailProfilePage from './Pages/DetailProfilePage';
import LandingPage from './Pages/LandingPage';
import ListUser from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list-user" element={<ProtectedRoute><ListUser /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/detail-profile/:userId' element={<DetailProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
