import React from "react";
import Heading from "../../common/src/components/Heading";
import Text from "../../common/src/components/Text";
import Image from "../../common/src/components/Image";
import Container from "../../common/src/components/UI/Container";
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from "./mapSection.style";

import mapImage from "../../common/src/assets/image/charity/map.png";

const MapSection = () => {
  return (
    <SectionWrapper>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="Areas where our clients work" />
          <Text content="Data from January 2019 till December 2019" />
        </SectionHeader>
        <ImageWrapper>
          <Image src={mapImage} alt="Charity Landing" />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
