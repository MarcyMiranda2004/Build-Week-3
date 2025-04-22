import "./App.css"
import Competenze from "./components/EsperienzaComponents/Competenze"

import Esperienza from "./components/EsperienzaComponents/Esperienza"
import Formazione from "./components/EsperienzaComponents/Formazione"
import Interessi from "./components/EsperienzaComponents/Interessi"

function App() {
  return (
    <>
      {" "}
      <Esperienza />
      <Formazione />
      <Competenze />
      <Interessi />
    </>
  )
}

export default App
