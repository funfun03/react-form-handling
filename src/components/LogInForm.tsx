import React, { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";

interface LogInFormProps {
  email: string;
  onBackToSignIn: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ email, onBackToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Extract name from email for display
  const getName = (email: string) => {
    if (!email) return "User";
    const username = email.split("@")[0];
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-300 flex items-center justify-center p-4">
      <div className="w-80 h-[600px] bg-black rounded-3xl p-6 text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center mb-8">
            <ChevronLeft
              className="w-6 h-6 text-white cursor-pointer hover:text-gray-300"
              onClick={onBackToSignIn}
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">Log in</h1>

          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">👤</span>
              </div>
            </div>
            <div>
              <p className="font-semibold">{getName(email)}</p>
              <p className="text-white/70 text-sm">{email}</p>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              defaultValue="iloveyou"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 pr-16"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              type="button"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold mb-6 transition-colors">
            Continue
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <p className="text-green-400 cursor-pointer hover:underline text-sm">
              Forgot your password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
