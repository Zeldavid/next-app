import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "../Atoms/Breadcrumb/Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textContent: "Breadcrumb text content",
    href: "",
  },
};
