import React from "react";
import Tag from "../components/tag.jsx";

export default {
  title: "Components/tag",
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Infrastructure = Template.bind({});
Infrastructure.args = {
  word: "Infrastructure"
};

export const Academic = Template.bind({});
Academic.args = {
  word: "Academic"
}

