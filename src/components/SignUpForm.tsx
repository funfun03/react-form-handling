import React from "react";
import { ChevronLeft, Eye } from "lucide-react";

interface SignUpFormProps {
  email: string;
  onBackToSignIn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ email, onBackToSignIn }) => {
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
          <h1 className="text-3xl font-bold mb-2">Sign up</h1>

          {/* Subtitle */}
          <div className="mb-6">
            <p className="text-white/80 text-sm mb-1">
              Looks like you don't have an account.
            </p>
            <p className="text-white/80 text-sm mb-1">
              Let's create a new account for
            </p>
            <p className="text-green-400 text-sm font-semibold">
              {email || "your email"}
            </p>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              defaultValue={email.split("@")[0]}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 pr-12"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
              <Eye className="w-5 h-5" />
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 text-xs text-white/70">
            <p>By selecting Agree and continue below,</p>
            <p>
              I agree to{" "}
              <span className="text-green-400 underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-green-400 underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Agree and Continue Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
            Agree and continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
