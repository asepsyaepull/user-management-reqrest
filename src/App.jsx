import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DetailProfilePage from './Pages/DetailProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/detail-profile/:userId' element={<DetailProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
