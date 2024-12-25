import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async () => {
        if (!formData.email || !formData.password) {
            setToast({
                type: 'error',
                message: 'Email dan password harus diisi.'
            });
            return;
        }
        
        setLoading(true);
        try {
            const response = await axios.post('https://reqres.in/api/login', formData);
            localStorage.setItem("access_token", response.data.token);
            setToast({
                type: 'success',
                message: 'Login Berhasil..'
            });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            setToast({
                type: 'error',
                message: 'Email atau password yang anda masukan salah..'
            });
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setToast({
            type: 'success',
            message: 'Logout berhasil..'
        });
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return { formData, handleChange, handleLogin, handleLogout, loading, showPassword, setShowPassword, toast, setToast };
}

export default useLogin;