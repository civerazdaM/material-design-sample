import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonSecondary from './index';

storiesOf('Button Secondary', module)
  .add('button secondary', () => (
    <ButtonSecondary
      onClick={action('clicked button secondary')}
      label="secondary"
    />
  ))
  .add('button secondary disabled', () => (
    <ButtonSecondary
      onClick={action('this should not happen')}
      label="secondary"
      isDisabled={true}
    />
  ));
