import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import Text from "../../common/src/components/Text";
import Heading from "../../common/src/components/Heading";
import Form from "./registrationForm";
import {
  ContentWrapper,
  TextArea,
  FormArea,
  HighlightedText,
} from "./registrationSection.style";

const RegistrationSection = () => {
  return (
    <ContentWrapper>
      <TextArea>
        <HighlightedText className="highlighted_text">
          <strong>Career</strong> Recruiting for multiple positions
          <Icon icon={chevronRight} />
        </HighlightedText>
        <Heading content="Career Opportunities Registration." />
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
      <FormArea>
        <Form />
      </FormArea>
    </ContentWrapper>
  );
};

export default RegistrationSection;
