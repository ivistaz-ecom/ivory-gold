import React from "react";
import Content from "../Shared/ServicesProps/Content";

const ContentSection = () => {
  return (
    <div>
      <Content
        title="Beauty Beneath the Surface"
        description={
          <>
            Nourishment that is elevated. Treatments crafted to bring
            tranquility, radiance, and precision to
            <br />
            every moment.
          </>
        }
      />
    </div>
  );
};

export default ContentSection;
