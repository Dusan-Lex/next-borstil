import HomeSlider from "../components/Home/HomeSlider/HomeSlider";
import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeDw from "../components/Home/HomeDW/HomeDW";
import HomeGallery from "../components/Home/HomeGallery/HomeGallery";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";

const HomePage = (props) => {
  return (
    <main>
      <HomeSlider first={props.first} />
      <HomeOffer />
      <HomeDw />
      <HomeAbout />
      <HomeGallery />
    </main>
  );
};

export default HomePage;
