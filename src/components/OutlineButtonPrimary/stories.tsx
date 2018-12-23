import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutlineButtonPrimary from './index';

storiesOf('Outline Button Primary', module)
  .add('outline button primary', () => (
    <OutlineButtonPrimary
      onClick={action('clicked outline button primary')}
      label="outline primary"
    />
  ))
  .add('outline button primary disabled', () => (
    <OutlineButtonPrimary
      onClick={action('this should not happen')}
      label="outline primary"
      isDisabled={true}
    />
  ));
