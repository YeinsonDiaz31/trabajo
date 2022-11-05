import Compclase from "./componentes/Compclase";
import Compfuncion from "./componentes/Compfuncion";
import Parrafo from "./componentes/Parrafo";
import Variables from "./componentes/Variables";

import Estados from "./componentes/Estados";
import Contador from "./componentes/Contador";
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

    <Estados></Estados>
    <Contador></Contador>

    
    </div>
  );
}

export default App;

