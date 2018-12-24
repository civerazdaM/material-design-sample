import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import RadioPrimary from './index';

storiesOf('Radio Primary', module).add('Radio Primary', () => (
  <RadioPrimary
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
