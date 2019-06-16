import React from 'react';
import { storiesOf } from '@storybook/react';

import TreeMenu from '../src/index';
import { action } from '@storybook/addon-actions';

const dataInArray = [
  {
    key: 'mammal',
    label: 'Mammal',
    url: 'https://google.com/search/?q=mammal',
    modes: [
      {
        key: 'canidae',
        label: 'Canidae',
        url: 'https://wwww.google.com/search?q=canidae'
      }
    ]
  }
];

storiesOf('TreeMenu', module)
  .add('default usage', () => (
    <TreeMenu data={dataInArray} onClickItem={action(`on click node`)} />
  ))
  .add('without search', () => (
    <TreeMenu
      data={dataInArray}
      onClickItem={action(`on click node`)}
      hasSearch={false}
    />
  ))
  .add('has initial states', () => (
    <TreeMenu
      data={dataInArray}
      onClickItem={action(`on click node`)}
      initialOpenNodes={['reptile', 'reptile/squamata', 'reptile/suaamata/lizard']}
      initialActiveKey="reptile"
    />
  ));