<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/Layouts/Footer';
import Figure from '@/assets/undraw_hello_ccwj.svg';
import { useTheme } from '@/provider/theme-provide';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
=======
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/Layouts/Footer";
import Figure from "@/assets/undraw_hello_ccwj.svg";
import { useTheme } from "@/provider/theme-provide";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOff, LockKeyhole, Mail } from "lucide-react";
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Login = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
<<<<<<< HEAD
    console.log('Form submitted:', data);
  };

  return (
    <div className="grid md:grid-cols-2 h-[80vh] justify-center items-center border-t-2 border-gray-200 md:p-4">
=======
    console.log("Form submitted:", data);
  };

  return (
    <div className="grid md:grid-cols-2  justify-center items-center border-t-2 border-gray-200 md:p-4">
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
      {/* left side image & text */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <img src={Figure} alt="" className="w-60" />
        <div className="max-w-96">
          <h2 className="text-2xl font-bold text-center">
            Welcome to Your Ultimate Learning Companion{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              LMS Platform
            </span>
          </h2>
          <p className="text-center mt-2 text-sm text-gray-400">
<<<<<<< HEAD
            Discover Knowledge, Stay on Track, and Achieve Your Dreams with Ease
=======
            Discover Knowledge, Stay on Track, and Achieve Your Dreams with
            Ease
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
          </p>
        </div>
      </div>

      {/* form box */}
      <div className="flex justify-center md:mt-0 mt-10">
        <div
<<<<<<< HEAD
          className={`md:w-[85%] ${
            theme === 'light' ? 'bg-white' : ''
          } border flex flex-col space-y-5 border-gray-200 p-10 rounded-xl shadow-lg`}
=======
          className={`md:min-w-[450px] max-w-[600px] ${theme === 'light' ? 'bg-white' : ''
            } border flex flex-col space-y-5 border-gray-200 p-10 rounded-xl shadow-lg`}
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
        >
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* email field */}
              <div>
                <label htmlFor="email" className="text-sm text-gray-400">
                  Username or Email
                </label>
<<<<<<< HEAD
                <Input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-1 h-10"
                  {...register('email', { required: '* Email is required' })}
                />
                {errors.email && (
                  <p className="text-sm mt-1 text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password field */}
              <div>
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="mt-1 h-10"
                    {...register('password', {
                      required: '* Password is required',
                    })}
                  />
                  {errors.password && (
                    <p className="text-sm mt-1 text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* show/hide password */}
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="show-password"
                    className="mr-2 cursor-pointer"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label
                    htmlFor="show-password"
                    className="text-sm text-gray-400 cursor-pointer"
                  >
                    Show Password
                  </label>
                </div>
              </div>

=======
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    className="mt-1 h-10 ps-12"
                    {...register('email', { required: '* Email is required' })}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className='w-5' />
                  </span>
                </div>
                {errors.email && (
                  <p className="text-sm mt-1 text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password field */}
              <div>
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="mt-1 h-10 ps-12"
                    {...register('password', {
                      required: '* Password is required',
                    })}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <LockKeyhole className='w-5' />
                  </span>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 ">
                    {showPassword ?
                      <EyeIcon className='w-5' onClick={() => setShowPassword(!showPassword)} /> :
                      <EyeOff className='w-5' onClick={() => setShowPassword(!showPassword)} />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-sm mt-1 text-red-500">
                    {errors.password.message}
                  </p>
                )}

              </div>


>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
              {/* confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm text-gray-400"
                >
                  Confirm Password
                </label>
<<<<<<< HEAD
=======

>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
<<<<<<< HEAD
                    className="mt-1 h-10"
=======
                    className="mt-1 h-10 ps-12"
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
                    {...register('confirmPassword', {
                      required: '* Confirm Password is required',
                    })}
                  />
<<<<<<< HEAD
                  {errors.confirmPassword && (
                    <p className="text-sm mt-1 text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
=======
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <LockKeyhole className='w-5' />
                  </span>

                </div>
                {errors.confirmPassword && (
                  <p className="text-sm mt-1 text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}

              </div>

              {/* show/hide password */}
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="show-password"
                  className="mr-2 cursor-pointer"
                  onChange={() => setShowPassword(!showPassword)}
                  checked={showPassword}
                />
                <label
                  htmlFor="show-password"
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  Show Password
                </label>
>>>>>>> a97199d0072595f1a07b3d177d722aa184762ae8
              </div>

              <Button type="submit" className="w-full h-10">
                Submit
              </Button>
            </div>
          </form>
          <Link to={'/login'}>
            <p className="text-center">
              Do you have an account?{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Sign in
              </span>
            </p>
          </Link>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
