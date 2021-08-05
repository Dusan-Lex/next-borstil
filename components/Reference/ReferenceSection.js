import Image from "next/image";
import ImaginedHeader from "../../shared/components/ImaginedHeader/ImaginedHeader";
import { referenceData } from "./ReferenceData";
import {
  StyledReferenceSection,
  ReferenceGrid,
  ReferenceGridItem,
} from "./ReferenceSectionStyles";

const ReferenceSection = () => {
  return (
    <StyledReferenceSection>
      <ImaginedHeader />
      <ReferenceGrid>
        {referenceData.map((item, index) => (
          <ReferenceGridItem>
            <Image
              key={index}
              src={item.srcImg}
              width="800"
              height="600"
              quality="50"
              layout="responsive"
              loading="eager"
            />
            <div className="description">
              <h4>{item.title}</h4>
              <p>{item.investor}</p>
              <p>{item.subject}</p>
              <p>{item.date}</p>
            </div>
          </ReferenceGridItem>
        ))}
      </ReferenceGrid>
    </StyledReferenceSection>
  );
};

export default ReferenceSection;
