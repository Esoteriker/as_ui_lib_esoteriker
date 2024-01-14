import type { Meta, StoryObj } from '@storybook/react';
import Chip from '../components/data-display/chip/Chip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDelete: { action: 'onDelete' }, // This allows you to trigger the onDelete action in the Storybook UI
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create a default story
export const Default: Story = ({
  args: {
    label: 'Chip Label',
  },
});

// Create additional stories with different configurations
export const WithAvatar: Story = ({
  args: {
    label: 'Chip Label',
    avatar: 'path/to/avatar.jpg',
  },
});

export const WithDeleteButton: Story = ({
  args: {
    label: 'WithDeleteButton',
    onDelete: () => {},
  },
});