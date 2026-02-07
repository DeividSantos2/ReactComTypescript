
import './App.css'
import ComponenteFilho from './components/ComponenteFilho'
import Contador from './components/Contador'
import DisplayWindowsSize from './components/DisplayWindowsSize'
import ExemploUserEffect from './components/ExemploUserEffect'
import Timer from './components/Timer'
import ValorDoContexto from './components/ValorDoContexto'
import { MeuProvider } from './contexts/MeuContexto'


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
      <Contador/>

      {/* Custom Hooks */}
    <DisplayWindowsSize/>
    
    </>
  )
}

export default App
