import useTranslation from "next-translate/useTranslation";
const HomePage = () => {
  let { t } = useTranslation();
  return (
    <div style={{ paddingTop: "20vh", height: "500rem" }}>
      {t("common:navigation.home")}
    </div>
  );
};

export default HomePage;
