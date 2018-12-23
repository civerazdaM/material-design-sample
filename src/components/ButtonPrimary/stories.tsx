import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonPrimary from './index';

storiesOf('Button Primary', module)
  .add('button primary', () => (
    <ButtonPrimary onClick={action('clicked button primary')} label="primary" />
  ))
  .add('button primary disabled', () => (
    <ButtonPrimary
      onClick={action('this should not happen')}
      label="primary"
      isDisabled={true}
    />
  ));
