import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonColor, ButtonVariant, ButtonIcon } from ".";

const meta: Meta<typeof Button> = { title: "UI/Button", component: Button };
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button CTA", disabled: false },
  argTypes: {
    color: {
      control: "select",
      options: Object.values(ButtonColor),
    },
  },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.small },
};

export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.medium },
};

export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.large },
};

export const XLarge: Story = {
  ...Default,
  args: { ...Default.args, size: ButtonSize.xlarge },
};

export const Primary: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.Primary },
};

export const Secondary: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.Secondary },
};

export const Gray: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.Gray },
};

export const Error: Story = {
  ...Default,
  args: { ...Default.args, color: ButtonColor.Error },
};

export const PrimaryEmpty: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: ButtonVariant.Empty,
    color: ButtonColor.Primary,
  },
};

export const GrayEmpty: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: ButtonVariant.Empty,
    color: ButtonColor.Gray,
  },
};

export const ErrorEmpty: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: ButtonVariant.Empty,
    color: ButtonColor.Error,
  },
};

export const IconLeading: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        <ButtonIcon src="/icons/message.svg" />
        Button CTA
      </>
    ),
  },
};

export const IconTrailing: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        Button CTA
        <ButtonIcon src="/icons/message.svg" />
      </>
    ),
  },
};

export const IconOnly: Story = {
  ...Default,
  args: {
    ...Default.args,
    children: <ButtonIcon src="/icons/message.svg" />,
    variant: ButtonVariant.iconOnly,
  },
};
