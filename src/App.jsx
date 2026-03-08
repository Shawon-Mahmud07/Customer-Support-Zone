import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Top section: navbar and status banner */}
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
