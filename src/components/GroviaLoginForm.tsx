import React, { useState } from "react";
import { Eye, EyeOff, LetterText } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/^[^\s]*$/, "Password cannot contain spaces")
    .required("Password is required"),
  rememberMe: yup.boolean().optional().default(false),
});

const GroviaLoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission logic here
    console.log(data);
    // Todo: Call api
    // Code here ...
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-gray-300 transform rotate-12"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-yellow-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-40 left-16 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>
          <div className="absolute top-60 left-1/3 w-8 h-8 bg-pink-200 transform rotate-45"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 py-12">
          {/* Main heading */}
          <div className="max-w-lg mb-12">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
              Set Your Partner Recruitment on Auto-Pilot
            </h1>
          </div>

          {/* Hero image area */}
          <div className="relative max-w-md">
            {/* Main person image placeholder */}
            <div className="relative">
              <div className="w-72 h-80 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl flex items-center justify-center">
                <div className="w-48 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-24 h-3 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Floating profile cards */}
              <div className="absolute -top-4 -right-8">
                <div className="w-20 h-20 bg-red-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-16 -right-12">
                <div className="w-20 h-20 bg-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8">
                <div className="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-16 -left-12">
                <div className="w-20 h-20 bg-purple-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 lg:w-2/5 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-gray-800">
                Grovia
              </span>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-500 mb-2">Login</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Login to your account
            </h3>
            <p className="text-sm text-gray-600">
              Thank you for get back to Grovia, let's access our the best
              recommendation contact for you.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                name="email"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
              />{" "}
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400"
                />{" "}
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.password.message}
                  </p>
                )}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register("rememberMe")}
                  type="checkbox"
                  id="remember"
                  //   checked={rememberMe}
                  //   onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-red-500 hover:underline">
                Reset Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              SIGN IN
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account yet?{" "}
                <a
                  href="#"
                  className="text-red-500 hover:underline font-medium"
                >
                  Join Grovia Now!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroviaLoginForm;
