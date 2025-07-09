import React, { useState, useEffect } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

type FormType = "signin" | "signup" | "login";

const FormShowcase: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<FormType>("signin");
  const [userEmail, setUserEmail] = useState<string>("");
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const showcaseElement = document.getElementById("form-showcase");
      if (showcaseElement) {
        const rect = showcaseElement.getBoundingClientRect();
        const isShowcaseVisible = rect.bottom > 0;
        setShowNavigation(isShowcaseVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setCurrentForm("signup");
  };

  const renderForm = () => {
    switch (currentForm) {
      case "signin":
        return <SignInForm onEmailSubmit={handleEmailSubmit} />;
      case "signup":
        return (
          <SignUpForm
            email={userEmail}
            onBackToSignIn={() => setCurrentForm("signin")}
          />
        );
      case "login":
        return (
          <LogInForm
            email={userEmail}
            onBackToSignIn={() => setCurrentForm("signin")}
          />
        );
      default:
        return <SignInForm onEmailSubmit={handleEmailSubmit} />;
    }
  };

  return (
    <div id="form-showcase" className="min-h-screen bg-gray-100">
      {/* Navigation - Only show when FormShowcase is visible */}
      {showNavigation && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-full shadow-lg p-2 flex gap-2">
            <button
              onClick={() => {
                setCurrentForm("signin");
                setUserEmail("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentForm === "signin"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sign In (Hi!)
            </button>
            <button
              onClick={() => {
                setCurrentForm("signup");
                setUserEmail("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentForm === "signup"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                setCurrentForm("login");
                setUserEmail("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentForm === "login"
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Log In
            </button>
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="flex items-center justify-center min-h-screen">
        {renderForm()}
      </div>
    </div>
  );
};

export default FormShowcase;
