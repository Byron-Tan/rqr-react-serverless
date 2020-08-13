import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/src/theme/charity";
import { ResetCSS } from "../common/src/assets/css/style";
import { DrawerProvider } from "../common/src/contexts/DrawerContext";
import Navbar from "../components/Navbar";
import DrawerSection from "../components/DrawerSection";
import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";
import BranchSection from "../components/BranchSection";
import WorkSection from "../components/WorkSection";
import MilestoneBlock from "../components/MilestoneBlock";
import HumanityBlock from "../components/HumanityBlock";
import PromotionBlock from "../components/PromotionBlock";
import DonateSection from "../components/DonateSection";
import MapSection from "../components/MapSection";
import FundraiserSection from "../components/FundraiserSection";
import BlogSection from "../components/BlogSection";
import ClientBlock from "../components/ClientBlock";
import Footer from "../components/Footer";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../components/charity.style";

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <ResetCSS />
      <GlobalStyle />
      {/* End of charity head section */}
      {/* Start charity wrapper section */}
      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar />
        </Sticky>
        <DrawerProvider>
          <DrawerSection />
        </DrawerProvider>
        <ContentWrapper>
          <BannerSection />
          <FeatureSection />
          <BranchSection />
          <WorkSection />
          <MilestoneBlock />
          <HumanityBlock />
          <PromotionBlock />
          <MapSection />
          <ClientBlock />
        </ContentWrapper>
        <Footer />
      </CharityWrapper>
      {/* End of charity wrapper section */}
    </ThemeProvider>
  );
};
