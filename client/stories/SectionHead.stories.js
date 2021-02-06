import React from "react";
import SectionHead from "../components/sectionhead.jsx";

export default {
  title: "Components/SectionHead",
  component: SectionHead,
};

const Template = (args) => (
  <div style={{ backgroundColor: "var(--dark-background-color)" }}>
    <SectionHead {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
};
