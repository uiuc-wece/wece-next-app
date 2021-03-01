import React from "react";
import Nav from "../components/nav.jsx";
import Provider from "./Provider.jsx";

export default {
  title: "Components/Nav",
  component: Nav,
  decorators: [(Story) => <Provider story={Story()} />],
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
