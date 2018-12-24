import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import CheckboxSecondary from './index';

storiesOf('Checkbox Secondary', module).add('Checkbox Secondary', () => (
  <CheckboxSecondary
    name="name"
    value={text('value', 'name')}
    label={text('label', 'Name')}
    checked={boolean('checked', false)}
    onChange={action('you can not edit this field')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    autoFocus={boolean('autoFocus', false)}
  />
));
