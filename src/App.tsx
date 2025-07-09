import "./App.css";
import GroviaLoginForm from "./components/GroviaLoginForm";
import RegisterForm from "./components/RegisterForm";
import FormShowcase from "./components/FormShowcase";

function App() {
  return (
    <div className="appContainer">
      <FormShowcase />
      <div className="App">
        <RegisterForm />
        <GroviaLoginForm />
      </div>
    </div>
  );
}

export default App;
