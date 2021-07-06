import HomeSlider from "../components/Home/HomeSlider/HomeSlider";
import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeDw from "../components/Home/HomeDW/HomeDW";

const HomePage = (props) => {
  return (
    <main>
      <HomeSlider first={props.first} />
      <HomeOffer />
      <HomeDw />
    </main>
  );
};

export default HomePage;
