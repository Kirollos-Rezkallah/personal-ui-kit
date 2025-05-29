import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithError: Story = {
  args: {
    id: "email-error",
    label: "Email",
    placeholder: "Enter your email",
    error: true,
  },
};

export const LargeInput: Story = {
  args: {
    id: "username",
    label: "Username",
    placeholder: "e.g. kirollos_m",
    inputSize: "lg",
  },
};
