import React from "react";
import { Link } from "react-router-dom";
import Text from "../../common/src/components/Text";
import Heading from "../../common/src/components/Heading";
import Container from "../../common/src/components/UI/Container";
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem,
} from "./milestoneBlock.style";

import { milestoneData } from "../../common/src/data/Charity";

const MilestoneBlock = () => {
  const { title, amount, text, counterItems } = milestoneData;
  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={title} />
          <Heading content={amount} />
          <Text content={text} />
          <Link href="#1">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Meet our Clients</span>
            </a>
          </Link>
        </MilestoneCard>
      </BlockWrapper>
    </Container>
  );
};

// <CounterWrapper>
//   {counterItems.map(item => (
//     <CounterItem key={`counter_key${item.id}`}>
//       <Heading as="h3" content={item.amount} />
//       <Text content={item.title} />
//     </CounterItem>
//   ))}
// </CounterWrapper>;

export default MilestoneBlock;
