import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/Layouts/Footer";
import Figure from "@/assets/undraw_hello_ccwj.svg";
import { useTheme } from "@/provider/theme-provide";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

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
        console.log("Form submitted:", data);
    };

    return (
      <div className="grid md:grid-cols-2 h-[80vh] justify-center items-center border-t-2 border-gray-200 md:p-4">
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
              Discover Knowledge, Stay on Track, and Achieve Your Dreams with
              Ease
            </p>
          </div>
        </div>

        {/* form box */}
        <div className="flex justify-center md:mt-0 mt-10">
          <div
            className={`md:w-[85%] ${
              theme === 'light' ? 'bg-white' : ''
            } border flex flex-col space-y-5 border-gray-200 p-10 rounded-xl shadow-lg`}
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

                {/* confirm password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm text-gray-400"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="mt-1 h-10"
                      {...register('confirmPassword', {
                        required: '* Confirm Password is required',
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-sm mt-1 text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
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
