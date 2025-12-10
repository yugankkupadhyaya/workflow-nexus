import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 p-4">
      <div className="w-full max-w-xs p-10 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-3xl font-medium tracking-tight text-center mb-10 text-neutral-900">
          Welcome Back
        </h2>

        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              id="email"
              name="email"
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder=" "
              className="peer w-full py-3 border-b border-gray-300 focus:border-b-2 focus:border-indigo-600 bg-transparent outline-none text-neutral-800 placeholder-transparent transition duration-200"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-4 text-sm text-gray-500 transition-all duration-200 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-focus:-top-4 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative pt-2">
            <input
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder=" "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="peer w-full py-3 border-b border-gray-300 focus:border-b-2 focus:border-indigo-600 bg-transparent outline-none text-neutral-800 placeholder-transparent transition duration-200"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-4 text-sm text-gray-500 transition-all duration-200 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 
                peer-focus:-top-4 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-full text-lg font-semibold text-white bg-neutral-900 shadow-lg shadow-neutral-900/40 hover:bg-neutral-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Log In Securely
            </button>
          </div>
        </form>

        {/* Helper Link (Fixed to prevent redirect) */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => console.log('Forgot password clicked')}
            className="text-xs text-gray-500 hover:text-indigo-600 transition duration-200"
          >
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
