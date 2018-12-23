import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutlineButtonSecondary from './index';

storiesOf('Outline Button Secondary', module)
  .add('outline button secondary', () => (
    <OutlineButtonSecondary
      onClick={action('clicked outline button secondary')}
      label="outline secondary"
    />
  ))
  .add('outline button secondary disabled', () => (
    <OutlineButtonSecondary
      onClick={action('this should not happen')}
      label="outline secondary"
      isDisabled={true}
    />
  ));
