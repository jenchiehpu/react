import MyButton from '.';

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/actions
    onClick: { action: 'button clicked' },
    rounded: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

const Template = ({ ...args }) => {
  return <MyButton {...args}>Hello Button</MyButton>;
};

export const Basic = Template.bind({});
export const Rounded = Template.bind({});

Rounded.args = {
  rounded: true,
  color: 'red',
};
