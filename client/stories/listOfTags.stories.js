import React from "react";
import ListOfTags from "../components/listOfTags.jsx";

export default {
  title: "Components/listOfTags",
  component: ListOfTags,
};

const Template = (args) => <ListOfTags {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  words: ["Infrastructure", "Outreach", "Academic", "Marketing", "Mentorship", "Social", "Technical"]
}