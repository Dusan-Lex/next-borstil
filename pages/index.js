import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeDw from "../components/Home/HomeDW/HomeDW";
import HomeGallery from "../components/Home/HomeGallery/HomeGallery";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeReference from "../components/Home/HomeReference/HomeReference";
import Slider from "../shared/components/Slider/Slider";
import useTranslation from "next-translate/useTranslation";
import { connectDatabase, getSomeReferences } from "../shared/utils/mongoDb";

const HomePage = (props) => {
  const { t } = useTranslation();
  const sliderArr = [
    {
      imgSrc: "/images/Home/Slider-Image-1.webp",
      title: t(`home:slider.0.title`),
      subtitle: t(`home:slider.0.subtitle`),
      alt: t(`home:slider.0.alt`),
    },
    {
      imgSrc: "/images/Home/Slider-Image-2.webp",
      title: t(`home:slider.1.title`),
      subtitle: t(`home:slider.1.subtitle`),
      alt: t(`home:slider.1.alt`),
    },
    {
      imgSrc: "/images/Home/Slider-Image-3.webp",
      title: t(`home:slider.2.title`),
      subtitle: t(`home:slider.2.subtitle`),
      alt: t(`home:slider.2.alt`),
    },
  ];
  return (
    <main>
      <Slider sliderArr={sliderArr} />
      <HomeOffer />
      <HomeDw />
      <HomeAbout />
      <HomeGallery />
      <HomeReference data={JSON.parse(props.homeReferenceData)} />
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return { props: { error: "error500" } };
  }
  const data = await getSomeReferences(client, "reference", [
    "1",
    "2",
    "3",
    "21",
    "4",
    "6",
    "7",
    "8",
    "9",
  ]);
  client.close();
  return {
    props: { homeReferenceData: JSON.stringify(data) },
  };
}
