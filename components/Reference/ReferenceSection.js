import Image from "next/image";
import ImaginedHeader from "../../shared/components/ImaginedHeader/ImaginedHeader";
import { referenceData } from "./ReferenceData";
import {
  StyledReferenceSection,
  ReferenceGrid,
  ReferenceGridItem,
  ReferenceDescription,
  ReferenceCompleteDetails,
} from "./ReferenceSectionStyles";
import File from "../../shared/components/svgs/File";

const ReferenceSection = () => {
  return (
    <StyledReferenceSection>
      <ImaginedHeader />
      <ReferenceGrid>
        {referenceData.map((item, index) => (
          <ReferenceGridItem key={index} index={index}>
            <Image
              key={index}
              src={item.srcImg}
              width="800"
              height="600"
              objectFit="cover"
              quality="50"
              layout="responsive"
              loading="eager"
              alt={item.title}
            />

            <ReferenceDescription index={index}>
              <h3>{item.title}</h3>
              <p>{item.investor}</p>
              <p>{item.subject}</p>
              <p>{item.date}</p>
            </ReferenceDescription>
          </ReferenceGridItem>
        ))}
      </ReferenceGrid>
      <ReferenceCompleteDetails>
        <p>Ovde možete pogledati kompletnu referentnu listu</p>
        <a href="/pdfs/ReferentnaLista.pdf" target="_blank">
          <File /> Referentna Lista
        </a>
      </ReferenceCompleteDetails>
    </StyledReferenceSection>
  );
};

export default ReferenceSection;
