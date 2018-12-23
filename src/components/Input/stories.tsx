import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index';
import { boolean, text } from '@storybook/addon-knobs/react';

storiesOf('Input', module).add('Empty Input', () => (
  <Input
    name="name"
    value={text('value', 'name')}
    label={text('label', 'Name')}
    onChange={action('you can not edit this field')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    // @ts-ignore
    type={text('type', 'text')}
    // @ts-ignore
    autoComplete={text('autoComplete', 'on')}
    autoFocus={boolean('autoFocus', false)}
  />
));
