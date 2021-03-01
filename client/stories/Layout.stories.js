import React from "react";
import Layout from "../components/layout.jsx";
import Provider from "./Provider.jsx";

export default {
  title: "Components/Layout",
  component: Layout,
  decorators: [(Story) => <Provider story={Story()} />],
};

const Template = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
