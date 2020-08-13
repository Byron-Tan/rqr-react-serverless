import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import Text from "../../common/src/components/Text";
import Heading from "../../common/src/components/Heading";
import Image from "../../common/src/components/Image";
import GlideCarousel from "../../common/src/components/GlideCarousel";
import GlideSlide from "../../common/src/components/GlideCarousel/glideSlide";
import LeftBar from "./leftBar";
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from "./bannerSection.style";

import { bannerSlides } from "../../common/src/data/Charity";

const BannerSection = () => {
  const glideOptions = {
    type: "carousel",
    perView: 1,
    gap: 0,
  };

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>Career</strong> Recruiting for multiple positions
            <Icon icon={chevronRight} />
          </HighlightedText>
          <Heading
            content="Bring a smile to
          Their faces."
          />
          <Heading
            as="h4"
            content="A personal way of giving back to 
            your loved charities."
          />
          <Text
            content="RQR is a specialised sales and marketing company that works with businesses particularly not for profits helping them to promote their products, services and achieve their goals.
          "
          />
          <Link href="#1">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Explore RQR</span>
            </a>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {bannerSlides.map((slide) => (
                <GlideSlide key={slide.id}>
                  <Image src={slide.thumb_url} alt="Charity Landing" />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
