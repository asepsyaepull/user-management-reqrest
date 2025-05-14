import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
    const [formDataRegister, setFormDataRegister] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormDataRegister({
            ...formDataRegister,
            [e.target.name]: e.target.value,
        });
    }

    const handleRegister = async () => {
        if (!formDataRegister.email || !formDataRegister.password || !formDataRegister.confirmPassword) {
            setToast({
                type: 'error',
                message: 'Semua field harus diisi.!'
            });
            return;
        }
        if (formDataRegister.password !== formDataRegister.confirmPassword) {
            setToast({
                type: 'error',
                message: 'Password dan konfirmasi password tidak cocok.'
            });
            return;
        }

        setLoading(true);
        try {
            await axios.post('https://reqres.in/api/register', formDataRegister, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });
            setToast({
                type: 'success',
                message: 'Register Berhasil! Silahkan login..'
            });
            setTimeout(() => {
                navigate('/login');
            }, 2000);
            // Error case
        } catch (error) {
            setToast({
                type: 'error',
                message: (error.response && error.response.data.error) || 'Terjadi kesalahan..' || 'Email sudah terdaftar'
            });
        } finally {
            setLoading(false);
        }
    }


    return { formDataRegister, handleChange, handleRegister, loading, showPassword, setShowPassword, toast, setToast };
}

export default useRegister;