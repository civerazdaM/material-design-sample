import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutlineButton from './index';

storiesOf('Outline Button', module)
  .add('outline button', () => (
    <OutlineButton onClick={action('clicked outline button')} label="outline" />
  ))
  .add('outline button disabled', () => (
    <OutlineButton
      onClick={action('this should not happen')}
      label="outline"
      isDisabled={true}
    />
  ));
