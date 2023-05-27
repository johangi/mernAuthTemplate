import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
    const { user } = useAuthContext();
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <div className='pages'>
                    <Routes>
                        <Route
                            path="/"
                            element={user ? <Home /> : <Navigate to="/login" replace/>}
                        />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate to="/home" replace />}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate to="/home" replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;