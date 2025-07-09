import React from "react";
import { ChevronLeft, Facebook, Chrome, Apple } from "lucide-react";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
  email: string;
}

interface SignInFormProps {
  onEmailSubmit: (email: string) => void;
}

const schema = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
});

const SignInForm: React.FC<SignInFormProps> = ({ onEmailSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Handle form submission logic here
    console.log(data);
    // Navigate to LogInForm with the email
    onEmailSubmit(data.email);
  };

  console.log("errors", errors);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-300 flex items-center justify-center p-4">
      <div className="w-80 h-[600px] bg-black rounded-3xl p-4 text-white relative overflow-hidden">
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
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-8">Hi!</h1>

          <div className="mb-6 backdrop-blur-sm p-4 bg-white/20 rounded-lg">
            {/* Email Input */}
            <div className="mb-6">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Continue Button */}
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold mb-4 transition-colors"
              onClick={handleSubmit(onSubmit)}
            >
              Continue
            </button>

            {/* OR Divider */}
            <div className="text-center text-white/70 mb-4">or</div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg relative hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <span className="text-center w-full block">
                  Continue with Facebook
                </span>
              </button>

              <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg relative hover:bg-white/30 transition-colors">
                <Chrome className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <span className="text-center w-full block">
                  Continue with Google
                </span>
              </button>

              <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-lg relative hover:bg-white/30 transition-colors">
                <Apple className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <span className="text-center w-full block">
                  Continue with Apple
                </span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="text-center space-y-2 text-sm">
              <p className="text-white/70">
                Don't have an account?{" "}
                <span className="text-green-400 font-semibold cursor-pointer hover:underline">
                  Sign up
                </span>
              </p>
              <p className="text-green-400 cursor-pointer hover:underline">
                Forgot your password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
