import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, array, object } from '@storybook/addon-knobs/react';
import Select from './index';

storiesOf('Select', module).add('Select', () => (
  <Select
    name="name"
    value={text('value', '1')}
    label={text('label', 'Name')}
    onChange={action('you can not edit this field')}
    error={text('error', '')}
    autoFocus={boolean('autoFocus', false)}
    disabled={boolean('disabled', false)}
    options={array('options', [
      object('option 1', { value: '1', label: 'Name 1' }),
      object('option 2', { value: '2', label: 'Name 2', disabled: true }),
      object('option 3', { value: '3', label: 'Name 3' })
    ])}
  />
));
