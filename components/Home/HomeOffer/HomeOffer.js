import useTranslation from "next-translate/useTranslation";
import {
  Offer,
  OfferContainer,
  OfferList,
  OfferListItem,
  OfferSvgBox,
  OfferText,
} from "./HomeOfferStyles";
import Natural from "../../shared/components/svgs/Natural";
import Heat from "../../shared/components/svgs/Heat";
import LongTerm from "../../shared/components/svgs/LongTerm";
import Sound from "../../shared/components/svgs/Sound";

const HomeOffer = () => {
  const { t } = useTranslation();
  return (
    <Offer>
      <OfferContainer>
        <OfferList>
          <OfferListItem>
            <OfferSvgBox>
              <Natural />
            </OfferSvgBox>
            <OfferText>{t("home:offer.natural")}</OfferText>
          </OfferListItem>
          <OfferListItem>
            <OfferSvgBox>
              <LongTerm />
            </OfferSvgBox>
            <OfferText>{t("home:offer.longterm")}</OfferText>
          </OfferListItem>
          <OfferListItem>
            <OfferSvgBox>
              <Heat />
            </OfferSvgBox>
            <OfferText>{t("home:offer.heat")}</OfferText>
          </OfferListItem>
          <OfferListItem>
            <OfferSvgBox>
              <Sound />
            </OfferSvgBox>
            <OfferText>{t("home:offer.sound")}</OfferText>
          </OfferListItem>
        </OfferList>
      </OfferContainer>
    </Offer>
  );
};

export default HomeOffer;
