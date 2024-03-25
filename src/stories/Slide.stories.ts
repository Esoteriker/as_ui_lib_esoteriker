import type { Meta, StoryObj } from '@storybook/react';
import Slider from '../components/inputs/slide/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Inputs/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    marks: {
      control: 'array',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallSlider: Story = {
  args: {
    size: 'small',
    marks: [0, 20, 40, 60, 80, 100],
  },
};

export const MediumSlider: Story = {
  args: {
    size: 'medium',
    marks: [0, 25, 50, 75, 100],
  },
};

export const LargeSlider: Story = {
  args: {
    size: 'large',
    marks: [0, 33, 67, 100],
  },
};

export const CustomMarksSlider: Story = {
  args: {
    size: 'medium',
    marks: [0, 10, 30, 60, 90, 100],
  },
};
