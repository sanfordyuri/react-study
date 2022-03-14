import WelcomeComponent from "./components/WelcomeComponent";
import Clock from "./components/Clock";
import ContadorComponent from "./components/ContadorComponent";
import BuscadorDeCepComponent from "./components/BuscadorDeCepComponent";
import LoginControl from "./components/LoginControl";
import SelectComponent from "./components/SelectComponent";
import CounterComponentHook from "./components/CounterHook";

function App() {
  return (
    <div className="App">
      <center>
        <WelcomeComponent name="Yuri" />
        <Clock />
        <ContadorComponent />
        <BuscadorDeCepComponent />
        <LoginControl />
        <SelectComponent lista={["teste", "teste2", "teste3"]} />
        <CounterComponentHook />
      </center>
    </div>
  );
}

export default App;
