import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import Popover from './index';
import Card from '../Card';

storiesOf('Popover')
  .addDecorator(checkA11y)
  .add('default', () => (
    <Popover onOverlayClick={action('overlay-click')}>
      <Card>Popover</Card>
    </Popover>
  ))
  .add('left = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      left={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('top = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      top={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('top = 10rem left = 10rem', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      top={'10rem'}
      left={'10rem'}
    >
      <Card>Popover</Card>
    </Popover>
  ))
  .add('transparent Overlay', () => (
    <Popover
      onOverlayClick={action('overlay-click')}
      transparentOverlay
    >
      <Card>Popover</Card>
    </Popover>
  ));
