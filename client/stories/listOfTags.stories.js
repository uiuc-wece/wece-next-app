import React from "react";
import listOfTags from "../components/listOfTags.jsx";

export default {
  title: "Components/listOfTags",
  component: listOfTags,
};

const Template = (args) => <listOfTags {...args} />;

export const Primary = Template.bind({});