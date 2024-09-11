import React from 'react'

export default function Sign() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-1.5/3 p-5 bg-[url('/public/Sign_Signup/f002.png')] bg-cover bg-center h-auto ">
          
          <h1 className="pt-10 text-base text-4xl text-center w-96 "></h1>
          
          
        </div>
        
        {/* Right Side */}
        <div className="p-10 w-96">
          <h2 className="mb-5 text-3xl font-bold text-gray-800">Welcome Back!</h2>
          
          <div className="mb-5">
            <label className="block mb-2 text-gray-800">Username</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-green-500" 
            />
          </div>
          
          <div className="mb-5">
            <label className="block mb-2 text-gray-800">Password</label>
            <input 
              type="password" 
              placeholder="******" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-green-500" 
            />
          </div>
          
          <div className="mb-5 text-right">
            <a href="#" className="text-base">Forget password?</a>
          </div>
          
          <button className="w-full py-2 mb-5 text-white rounded-lg bg-base hover:bg-darkest">Login</button>
          
          <div className="pb-4 text-center">
            <p>
              Doesnt have an account? <a href="#" className="text-base">Sign Up for free</a>
            </p>
          </div>
          <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-lightest">
            <img 
              src="/public/Sign_Signup/g-icon.png" 
              alt="Google Logo" 
              className="w-5 h-auto mr-2" 
            />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-lightest">
            <img 
              src="/public/Sign_Signup/fb-icon.png" 
              alt="Facebook Logo" 
              className="h-auto mr-2 w-7" 
            />
            Sign up with Facebook
          </button>
          
        </div>
      </div>
    </div>
  )
}
