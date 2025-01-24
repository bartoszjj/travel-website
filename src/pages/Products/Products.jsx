import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ProductCards from "../../components/ProductCards/ProductCards";

function Products() {
  return (
    <MainContent>
      <SectionWrapper color="secondary">
        <ProductCards></ProductCards>
      </SectionWrapper>
    </MainContent>
  );
}

export default Products;
