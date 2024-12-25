import { action } from '@storybook/addon-actions';

import Radio from '.';
import RadioGroup from './RadioGroup';

export default {
  title: 'Radio',
  component: Radio,
};

export const Basic = () => {
  return (
    <RadioGroup name="skill" onChange={action('RadioGroupChange')}>
      <div className="row">
        <div className="col-3">
          <Radio label="React" />
        </div>
        <div className="col-3">
          <Radio label="Vue" />
        </div>
        <div className="col-3">
          <Radio label="Angular" />
        </div>
        <div className="col-3">
          <Radio label="jQuery" disabled />
        </div>
      </div>
    </RadioGroup>
  );
};

export const DefaultValue = () => {
  return (
    <RadioGroup name="Gender" defaultValue="0" onChange={action('radioGroupChange')}>
      <div className="d-block">
        <Radio label="男" value="1" />
      </div>
      <div className="d-block">
        <Radio label="女" value="0" />
      </div>
    </RadioGroup>
  );
};
