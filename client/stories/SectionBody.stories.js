import React from "react";
import SectionBody from "../components/sectionbody.jsx";

export default {
  title: "Components/SectionBody",
  component: SectionBody,
};

const Template = (args) => <SectionBody {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  hoverEffect: false,
};
export const WithLink = Template.bind({});
WithLink.args = {
  hoverEffect: false,
  link: "#",
};
export const WithHover = Template.bind({});
WithHover.args = {
  hoverEffect: true,
};
export const WithLinkAndHover = Template.bind({});
WithLinkAndHover.args = {
  hoverEffect: true,
  link: "#",
};
