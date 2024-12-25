import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from '.';
import CheckboxGroup from './CheckboxGroup';

const onChange = action('onChange');

export default {
  title: 'Checkbox',
};

export const Basic = () => {
  return (
    <CheckboxGroup onChange={onChange}>
      <Checkbox value="react" text="Hello Checkbox" />
    </CheckboxGroup>
  );
};
export const Multi = () => {
  const [skill, setSkill] = React.useState(['react', 'vue']);
  const atChange = React.useCallback((values: string[]) => {
    setSkill(values);
    onChange(values);
  }, []);
  return (
    <>
      <h2>{JSON.stringify(skill)}</h2>
      <CheckboxGroup defaultValue={skill} onChange={atChange}>
        <Checkbox value="react" text="React" />
        <Checkbox value="es6" text="es6" />
        <Checkbox value="vue" text="Vue" />
        <Checkbox text="Javascript" />
      </CheckboxGroup>
    </>
  );
};
export const Disabled = () => {
  return (
    <CheckboxGroup onChange={onChange}>
      <Checkbox text="React" />
      <Checkbox disabled value="react" text="disabled" />
    </CheckboxGroup>
  );
};
