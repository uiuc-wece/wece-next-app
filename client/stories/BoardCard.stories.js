import React from "react";
import BoardCard from "../components/boardcard.jsx";

export default {
  title: "Components/BoardCard",
  component: BoardCard,
};

const Template = (args) => <BoardCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Eugenia Chen",
  role: "Infrastructure Director",
  major: "Computer Science",
  year: "senior",
  spiritAnimal: "totoro",
  hobbies: "jamming out with friends, graphic design, and baking",
  quote:
    '"You are braver than you believe, stronger than you seem, and smarter than you think." - Winnie the Pooh',
  img: "../public/imgs/board/eugenia.jpg",
};
