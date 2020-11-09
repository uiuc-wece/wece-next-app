import React from "react";
import Carousel from "../components/carousel.jsx";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
