import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
  <Navbar />
  <AppRoutes />
</div>

  );
};

export default App;
