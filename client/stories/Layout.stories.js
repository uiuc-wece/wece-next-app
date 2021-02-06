import React from "react";
import Layout from "../components/layout.jsx";

export default {
  title: "Components/Layout",
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
