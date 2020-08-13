import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../common/src/components/UIElements/Logo";
import Image from "../../common/src/components/Image";
import Container from "../../common/src/components/UI/Container";
import NavbarWrapper, { MenuWrapper, Button } from "./navbar.style";

import logoImage from "../../common/src/assets/image/charity/logo.svg";
import heartImage from "../../common/src/assets/image/charity/heart-red.png";

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/"
          logoSrc={logoImage}
          className="logo"
          title="Charity React Next Landing"
        />
        <MenuWrapper>
          <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
