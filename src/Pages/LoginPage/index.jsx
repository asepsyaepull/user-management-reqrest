import React from 'react';
import InputField from '../../components/ui/InputField';
import { Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react';
import Toast from '../../components/ui/Toast';
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const { formData, handleChange, handleLogin, loading, showPassword, setShowPassword, toast, setToast } = useLogin();

    const buttonText = loading ?
        <span className="loading loading-spinner loading-md">Loading</span> : 'Login';

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div>
            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-olive-100 rounded-full mb-4">
                            <Leaf className="w-6 h-6 text-olive-700" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                        <p className="text-gray-600">Sign in to continue to your account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
                        <InputField
                            icon={<Mail size={20} />}
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <InputField
                            icon={<Lock size={20} />}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            endIcon={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            }
                        />
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-olive-700 hover:text-olive-800">Forgot password?</a>
                        </div>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="w-full bg-olive-700 text-white py-3 rounded-lg font-medium hover:bg-olive-800 transition-colors"
                        >
                            {buttonText}
                        </button>

                        <p className="text-center text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-olive-700 hover:text-olive-800 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;