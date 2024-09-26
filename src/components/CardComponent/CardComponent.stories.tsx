import CardComponent from "./CardComponent";
import { CardProps } from "../../utils/interfaces";
import type { StoryFn } from "@storybook/react";

export default {
  title: "Components/CardComponent",
  component: CardComponent,
};

const Template = (args: CardProps) => <CardComponent {...args} />;

export const Default: StoryFn<CardProps> = Template.bind({});
Default.args = {
  thumbnail: "https://via.placeholder.com/150",
  title: "Sample Game",
  description: "This is a sample game description.",
  openGiveawayUrl: "#",
};
