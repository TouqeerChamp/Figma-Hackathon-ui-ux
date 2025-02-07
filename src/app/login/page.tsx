import React from 'react';
import TopNavbarSignIn from '../Components/TopNavbarSignIn';
import Header from '../Components/Header';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <TopNavbarSignIn />
      <Header />
      
      <div className="bg-white shadow-lg rounded-lg p-8 my-8 w-96 text-center">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Nike Logo" width={80} height={80} />
        </div>
        <h1 className="font-bold text-xl mt-4 text-pink-600 leading-tight">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>
        
        <div className='mt-6 space-y-4'>
          <input type="email" placeholder="Email Address" className='w-full border rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500' />
          <input type="password" placeholder="Password" className='w-full border rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500' />
        </div>
        
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
            <input type="checkbox" id="signin" />
            <label htmlFor="signin">Keep me signed in</label>
          </div>
          <p className="cursor-pointer hover:text-gray-900">Forgot your password?</p>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          By logging in, you agree to Nike’s <u>Privacy Policy</u> and <u>Terms of Use.</u>
        </p>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-md text-sm  hover:bg-gray-800 bg-gradient-to-r from-pink-500 to-red-500 font-semibold px-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:text-red-950">
          SIGN IN
        </button>

        <p className="text-xs text-gray-600 mt-4">
          Not a Member? <Link href="/join-us" className='text-red-600 font-semibold'>Join Us.</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
