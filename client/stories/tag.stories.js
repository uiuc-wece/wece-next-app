import React from "react";
import YourComponent from "../components/tag.jsx";

export default {
  title: "Components/tag",
  component: tag,
};

const Template = (args) => <tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  word: "Infrastructure"
};

export const Secondary = Template.bind({});
Secondary.args = {
  word: "Academic"
}

