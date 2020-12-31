import React from "react";
import YourComponent from "../components/yourcomponent.jsx";

export default {
  title: "Components/YourComponent",
  component: YourComponent,
};

const Template = (args) => <YourComponent {...args} />;

export const Primary = Template.bind({});