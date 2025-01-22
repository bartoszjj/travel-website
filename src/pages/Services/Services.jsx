import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ServiceItems from "../../components/ServiceItems/ServiceItems";

function Services() {
  return (
    <MainContent>
      <SectionWrapper color="secondary">
        <ServiceItems></ServiceItems>
      </SectionWrapper>
    </MainContent>
  );
}

export default Services;
