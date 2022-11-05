import Compclase from "./componentes/Compclase";
import Compfuncion from "./componentes/Compfuncion";
import Parrafo from "./componentes/Parrafo";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
import Estados from "./componentes/Estados";
import Contador from "./componentes/Contador";
import Listas from "./componentes/Listas";
import { Formulario } from "./componentes/Formulario";
function App() {
  return (
    <div className="App">
     <h1>Trabajo de React</h1>
     <Formulario/>
    <Compclase/>
    <Compfuncion/>
    <Parrafo/>
    <Variables></Variables>
    <Eventos></Eventos>
    <Estados></Estados>
    <Contador></Contador>
    <Listas/>
    
    </div>
  );
}

export default App;

