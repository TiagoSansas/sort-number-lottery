import { Header } from "./components/Header/header";
import RoutesPages from "./pages/routes";
function App() {
  return (
    <div className="m-auto max-w-screen-xl ">
      <Header />
      <RoutesPages />
    </div>
  );
}

export default App;
