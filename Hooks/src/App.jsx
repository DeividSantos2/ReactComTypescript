import "./App.css";
import Cointainer from "./components/Cointainer";
import ComponenteFilho from "./components/ComponenteFilho";
import Contador from "./components/Contador";
import DisplayWindowsSize from "./components/DisplayWindowsSize";
import ExemploUserEffect from "./components/ExemploUserEffect";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuProvider } from "./contexts/MeuContexto";

function App() {
  return (
    <>
      {/* useEffect */}
      <ExemploUserEffect />
      <Timer />
      {/* useContext */}
      {/* transferir dados entre componentes */}
      <MeuProvider>
        <ComponenteFilho />
        <ValorDoContexto />
        {/* os componentes que precisam acessar o contexto devem estar dentro do provider */}
      </MeuProvider>

      {/* useReduce */}
      <Contador />

      {/* Custom Hooks */}
      <DisplayWindowsSize />
      {/* Slots e CHildren props */}
    <Cointainer>
        <Timer />
    </Cointainer>

    {/* Sicronizar estados com props */}

    <PerfilDeUsuario/>
    </>
  );
}

export default App;
