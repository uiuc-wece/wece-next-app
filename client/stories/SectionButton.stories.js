import React from "react";
import SectionButton from "../components/sectionbutton.jsx";

export default {
  title: "Components/SectionButton",
  component: SectionButton,
};

const Template = (args) => <SectionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: "Button",
  buttonLink: "#",
};
