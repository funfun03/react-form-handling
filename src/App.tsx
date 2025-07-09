import "./App.css";
import GroviaLoginForm from "./components/GroviaLoginForm";
import RegisterForm from "./components/RegisterForm";
import FormShowcase from "./components/FormShowcase";
import UserRegistrationForm from "./components/UserRegistrationForm";

function App() {
  return (
    <div className="appContainer">
      <FormShowcase />
      <div className="App">
        <RegisterForm />
        <GroviaLoginForm />
        <UserRegistrationForm />
      </div>
    </div>
  );
}

export default App;
