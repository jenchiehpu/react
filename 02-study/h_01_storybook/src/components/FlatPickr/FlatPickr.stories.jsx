import FlatPickr from '.';

export default {
  title: 'FlatPickr',
  component: FlatPickr,
  argTypes: {
    onChange: { action: 'date Change' },
    defaultDate: {
      control: { type: 'date' },
    }
  },
};

const Template = ({ ...args }) => {
  return <FlatPickr {...args} />;
};

export const Basic = Template.bind({});
export const DefaultDate = Template.bind({});
DefaultDate.args = {
  defaultDate: +new Date()
}
