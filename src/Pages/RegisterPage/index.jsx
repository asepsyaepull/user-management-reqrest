import React from 'react';
import useRegister from '../../hooks/useRegister';
import InputField from '../../components/ui/InputField';
import Toast from '../../components/ui/Toast';
import { Eye, EyeOff, Lock, Mail, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const { formDataRegister, handleChange, handleRegister, loading, showPassword, setShowPassword, toast, setToast } = useRegister();

  const buttonText = loading ?
    <span className="loading loading-spinner loading-md">Loading</span> : 'Register';

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-olive-100 rounded-full mb-4">
            <Sprout className="w-6 h-6 text-olive-700" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-600">Join our community of designers and developers</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-sm">
          <InputField
            icon={<Mail size={20} />}
            type="email"
            name="email"
            placeholder="Email address"
            value={formDataRegister.email}
            onChange={handleChange}
          />
          <InputField
            icon={<Lock size={20} />}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formDataRegister.password}
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

          <InputField
            icon={<Lock size={20} />}
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formDataRegister.confirmPassword}
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

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-olive-700 text-white py-3 rounded-lg font-medium hover:bg-olive-800 transition-colors"
            >
              {buttonText}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-olive-700 hover:text-olive-800 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage;