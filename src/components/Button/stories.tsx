import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
  .add('default button', () => (
    <Button onClick={action('clicked default button')} label="default" />
  ))
  .add('default button disabled', () => (
    <Button
      onClick={action('this should not happen')}
      label="default"
      isDisabled={true}
    />
  ));
