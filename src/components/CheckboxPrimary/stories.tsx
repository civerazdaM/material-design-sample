import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import CheckboxPrimary from './index';

storiesOf('Checkbox Primary', module).add('Checkbox Primary', () => (
  <CheckboxPrimary
    name="name"
    value={text('value', 'name')}
    label={text('label', 'Name')}
    checked={boolean('checked', false)}
    onChange={action('you can not edit this field')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    // @ts-ignore
    autoComplete={text('autoComplete', 'on')}
    autoFocus={boolean('autoFocus', false)}
  />
));
