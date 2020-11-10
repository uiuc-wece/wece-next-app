import React from "react";
import Nav from "../components/nav.jsx";

export default {
  title: "Components/Nav",
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
