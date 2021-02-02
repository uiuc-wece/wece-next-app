import React from "react";
import EventCard from "../components/eventcard.jsx";

export default {
  title: "Components/EventCard",
  component: EventCard,
};

const Template = (args) => <EventCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Intro to Web Design",
  startDate: new Date("2021-02-01T20:15:00"),
  endDate: new Date("2021-02-01T22:15:00"),
  recurring: false,
  description: "This is the description for this really cool event.",
  location: "ECEB",
  webConferenceLink: "",
  actionLink: "",
  hosts: [],
  committees: [
    { label: "Social", value: "social" },
    { label: "Outreach", value: "outreach" },
  ],
  points: 3,
  eventImage:
    "https://res.cloudinary.com/weceuiuc/image/upload/v1609464442/cupcake_qwji5x.jpg",
  users: [{ label: "Eugenia Chen", value: "eyc3@illinois.edu" }],
};
