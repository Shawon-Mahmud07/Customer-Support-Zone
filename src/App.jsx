import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Top section: navbar and status banner */}
      <Navbar />
      <Banner />
      {/* Main content section with tickets and task status */}
      <MainSection />
    </div>
  );
}

export default App;
