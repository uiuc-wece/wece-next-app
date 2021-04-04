import React from "react";
import RecentPosts from "../components/recentposts.jsx";

export default {
  title: "Components/RecentPosts",
  component: RecentPosts,
};

const Template = (args) => <RecentPosts {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//     post1:
//     post2:
//     post3:
// }
