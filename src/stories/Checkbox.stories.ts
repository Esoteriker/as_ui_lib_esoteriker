import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/inputs/checkbox/Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
      size: 'small',
    },
  };
  
  export const Medium: Story = {
    args: {
      size: 'medium',
    },
  };
  
  export const Large: Story = {
    args: {
      size: 'large',
    },
  };
  
  export const Round: Story = {
    args: {
      shape: 'round',
    },
  };
  
  export const Square: Story = {
    args: {
      shape: 'square',
    },
  };
  
  export const Required: Story = {
    args: {
      required: true,
    },
  };
  
  export const Disabled: Story = {
    args: {
      disabled: true,
    },
  };