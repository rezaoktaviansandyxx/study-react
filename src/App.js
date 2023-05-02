import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';
import ServicesComp from './components/ServicesComp';
import FooterComp from './components/FooterComp';
import FaqComp from './components/FaqComp';
import GalleryComp from './components/GalleryComp';

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <GalleryComp />
      <ServicesComp />
      <FaqComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
