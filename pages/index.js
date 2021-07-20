import HomeSlider from "../components/Home/HomeSlider/HomeSlider";
import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeDw from "../components/Home/HomeDW/HomeDW";
import HomeGallery from "../components/Home/HomeGallery/HomeGallery";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeReference from "../components/Home/HomeReference/HomeReference";

const HomePage = (props) => {
  return (
    <main>
      <HomeSlider />
      <HomeOffer />
      <HomeDw />
      <HomeAbout />
      <HomeGallery />
      <HomeReference />
    </main>
  );
};

export default HomePage;
