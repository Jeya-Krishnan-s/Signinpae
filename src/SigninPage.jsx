import './Index.css';
import { useState } from 'react';



const SigninPage = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const validateEmail = (email) => {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
   
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setSuccessMessage('');

    if (!validateEmail(input.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePassword(input.password)) {
      newErrors.password = 'Password must be at least 8 characters, with uppercase, lowercase, number, and special character';
    }

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage(`Logged in with email: ${input.email}`);
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl md:flex-row">
       
        <div className="flex flex-col w-full p-8 md:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Sign In</h2>
          <div className="flex items-center justify-center mb-6 space-x-3 ">
          
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-600 ">
                <input type="checkbox" className="mr-2" k />
                Remember Me
              </label>
              <a href="#" className="text-sm text-pink-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="w-full py-2 font-semibold text-white bg-custom-pink rounded-md hover:bg-pink-600">
              Sign In
            </button>
          </form>
          {successMessage && <p className="mt-4 text-sm text-green-600">{successMessage}</p>}
        </div>

      
        <div className="md:flex md:w-1/2 items-center justify-center bg-gradient-to-r bg-custom-pink text-white p-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Welcome to Login</h2>
            <p className="mb-6">Don't have an account?</p>
            <button className="px-6 py-2 font-semibold text-pink-700 bg-white rounded-md hover:bg-gray-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
