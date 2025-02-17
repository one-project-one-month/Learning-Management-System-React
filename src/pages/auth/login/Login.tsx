import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/Layouts/Footer";
import Figure from "@/assets/undraw_online-learning_tgmv.svg";
import { useTheme } from "@/provider/theme-provide";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
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
    <div className="grid md:grid-cols-2 border-t-2 border-gray-200 md:p-4">

      {/* left side image & text */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <img src={Figure} alt="" className="w-60" />
        <div className="max-w-96">
          <h2 className="text-2xl font-bold text-center">
            Empower Your Learning Journey with{' '}
            <span className="font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              LMS Platform
            </span>
          </h2>
          <p className="text-center mt-2 text-sm text-gray-400">
            Unlock Knowledge, Track Progress, and Achieve Your Academic Goals Seamlessly
          </p>
        </div>
      </div>

      {/* form box */}
      <div className="flex justify-center md:mt-0 mt-10">
        <div
          className={`md:w-[85%] ${theme === "light" ? "bg-white" : ""} border flex flex-col space-y-5 border-gray-200 p-10 rounded-xl shadow-lg`}
        >
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Login
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
                  {...register("email", { required: "* Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm mt-1 text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* password field */}
              <div>
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="mt-1 h-10"
                    {...register("password", { required: "* Password is required" })}
                  />
                  {errors.password && (
                    <p className="text-sm mt-1 text-red-500">{errors.password.message}</p>
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
                  <label htmlFor="show-password" className="text-sm text-gray-400 cursor-pointer">
                    Show Password
                  </label>
                </div>

                {/* forgot password */}
                <div className="flex justify-end mt-1">
                  <span className="text-sm text-underscrow bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-green-200 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent underline decoration-green-400 cursor-pointer">
                    Forgot password
                  </span>
                </div>
              </div>

              <Button type="submit" className="w-full h-10">
                Login
              </Button>
            </div>
          </form>
          <Link to={"/register"}>
            <p className="text-center">
              Don't have an account?{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Sign up
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