import HeroSection from "../components/HeroSection";
import BookACar from "../components/BookACar";
import PlanTrip from "../components/PlanTrip";
import Models from "../components/Models";
import Save from "../components/Save";
import Valued from "../components/Valued";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <BookACar />
      <PlanTrip />
      <Models />
      <Save />
      <Valued />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </div>
  );
}

export default Home;
