import WelcomeComponent from "./components/WelcomeComponent";
import Clock from "./components/Clock";
import ContadorComponent from "./components/ContadorComponent";
import BuscadorDeCepComponent from "./components/BuscadorDeCepComponent";
import LoginControl from "./components/LoginControl";

function App() {
  return (
    <div className="App">
      <center>
        <WelcomeComponent name="Yuri" />
        <Clock />
        <ContadorComponent />
        <BuscadorDeCepComponent />
        <LoginControl />
      </center>
    </div>
  );
}

export default App;
