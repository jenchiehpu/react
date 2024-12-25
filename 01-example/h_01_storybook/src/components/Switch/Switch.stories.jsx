/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import Switch from '.';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
};

const Template = ({ ...args }) => {
  const { checked: argsChecked } = args;
  const [checked, setChecked] = React.useState(argsChecked);
  React.useEffect(() => {
    setChecked(argsChecked);
  }, [argsChecked]);
  return <Switch onChange={setChecked} checked={checked} />;
};

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
