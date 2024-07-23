import React from "react";
import DarkContainer from "../DarkContainer";
import FooterEnd from "./FooterEnd";
import FooterNavigation from "./FooterNavigation";
function Footer() {
  return (<>
  <DarkContainer>
    <FooterNavigation />
  </DarkContainer>
  <FooterEnd />
  </>
  );
}

export default Footer;
