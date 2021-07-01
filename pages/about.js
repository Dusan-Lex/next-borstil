import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
const About = () => {
  let { t } = useTranslation();
  return (
    <div style={{ paddingTop: "20vh", height: "70rem" }}>
      {t("common:navigation.about")}
    </div>
  );
};

export default About;
