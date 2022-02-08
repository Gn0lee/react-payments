import { Story } from "@storybook/react";
import { CardType } from "../../@types";

import CardTypeRadio, { Props } from "./CardTypeRadio";

export default {
  title: "Components/CardTypeRadio",
  component: CardTypeRadio,
};

const Template: Story<Props> = (args) => <CardTypeRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: "NONE",
  onChange: (type: CardType) => console.log(type),
};

export const Selected = Template.bind({});
Selected.args = {
  selected: "BRAN",
  onChange: (type: CardType) => console.log(type),
};
