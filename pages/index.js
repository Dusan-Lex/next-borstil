import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeDw from "../components/Home/HomeDW/HomeDW";
import HomeGallery from "../components/Home/HomeGallery/HomeGallery";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeReference from "../components/Home/HomeReference/HomeReference";
import Slider from "../shared/components/Slider/Slider";
import useTranslation from "next-translate/useTranslation";
import { getSomeReferences } from "../shared/utils/mongoDb";
import { connectToDatabase } from "../shared/utils/mongoDb";

const HomePage = (props) => {
  const { t } = useTranslation();
  const sliderArr = [
    {
      imgSrc: "/images/home/Slider-Image-1.webp",
      title: t(`home:slider.0.title`),
      subtitle: t(`home:slider.0.subtitle`),
      alt: t(`home:slider.0.alt`),
    },
    {
      imgSrc: "/images/home/Slider-Image-2.webp",
      title: t(`home:slider.1.title`),
      subtitle: t(`home:slider.1.subtitle`),
      alt: t(`home:slider.1.alt`),
    },
    {
      imgSrc: "/images/home/Slider-Image-3.webp",
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
  const { db, error } = await connectToDatabase();

  if (error) {
    return { props: { error } };
  }
  const data = await getSomeReferences(db, "reference", [
    "/images/reference/Borstil-reference-1.jpg",
    "/images/reference/Borstil-reference-2.jpg",
    "/images/reference/Borstil-reference-3.jpg",
    "/images/reference/Borstil-reference-21.jpg",
    "/images/reference/Borstil-reference-4.jpg",
    "/images/reference/Borstil-reference-6.jpg",
    "/images/reference/Borstil-reference-7.jpg",
    "/images/reference/Borstil-reference-8.jpg",
    "/images/reference/Borstil-reference-9.jpg",
  ]);
  return {
    props: { homeReferenceData: JSON.stringify(data) },
  };
}
