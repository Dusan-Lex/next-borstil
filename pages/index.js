import useTranslation from "next-translate/useTranslation";
import HomeSlider from "../components/HomeSlider/HomeSlider";
const HomePage = () => {
  let { t } = useTranslation();
  return <HomeSlider />;
};

export default HomePage;
