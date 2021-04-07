import React from "react";
import Searchbar from "../components/searchbar.jsx";

export default {
  title: "Components/Searchbar",
  component: Searchbar,
};

const Template = (args) => <Searchbar {...args} />;

export const Primary = Template.bind({});
