import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext"
import Footer from "./components/atoms/footer/footer";

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  );
}

export default App;
