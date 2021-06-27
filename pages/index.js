import useTranslation from "next-translate/useTranslation";
import { Fragment } from "react";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import HomeOffer from "../components/HomeOffer/HomeOffer";
const HomePage = () => {
  let { t } = useTranslation();
  return (
    <Fragment>
      <HomeSlider />
      <HomeOffer />
    </Fragment>
  );
};

export default HomePage;
