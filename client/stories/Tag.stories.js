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

export const Marketing = Template.bind({});
Marketing.args = {
  word: "Marketing"
}

export const Mentorship = Template.bind({});
Mentorship.args = {
  word: "Mentorship"
}

export const Outreach = Template.bind({});
Outreach.args = {
  word: "Outreach"
}

export const Social = Template.bind({});
Social.args = {
  word: "Social"
}

export const Technical = Template.bind({});
Technical.args = {
  word: "Technical"
}

