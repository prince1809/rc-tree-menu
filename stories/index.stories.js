import React from 'react';
import { storiesOf } from '@storybook/react';

import TreeMenu from '../src/index';

storiesOf('TreeMenu', module)
  .add('default usage', () => (
    <TreeMenu />
  ));