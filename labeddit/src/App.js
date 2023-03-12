import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Router from "./routes/Router";
import "./styles.css"


function App() {
  const [isLogged,setIsLogged] = useState(false)
const context = {
  isLogged,
  setIsLogged
}

  return (
   
      <GlobalContext.Provider value={context}>
      <Router/>
      </GlobalContext.Provider>
      
     
   
  );
}

export default App;
