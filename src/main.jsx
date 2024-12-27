import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Profile from "./components/profile.jsx";
import { App } from "./App.jsx";
//import { Practice } from "./practies.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>  
   
   {/*<Profile />*/}
    
    {/*<Practice />*/}
  </StrictMode>,
)
