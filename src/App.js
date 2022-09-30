import StoreContextProvider from "./Context/StoreContext";
import { Router } from "./Router";
import MainPage from "./Views/MainPage";

function App() {
  return (
    <StoreContextProvider>
      <Router />
    </StoreContextProvider>
  );
}

export default App;
