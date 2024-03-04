
import './App.css'
import miPrimerComponente from './miPrimerComponente'
import ComponenteNuevo from './ComponenteNuevo'

function App() {
  
  console.log("hola desde react")

  return (
    <>
    <h1>Hola mundo desde react!!!!</h1>
    <p>Te queremos vite y react</p>
    
    <miPrimerComponente>
    </miPrimerComponente>
    <ComponenteNuevo></ComponenteNuevo>
    </>
    
  )
}

export default App
