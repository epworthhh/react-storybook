import React from 'react';

import { wInfo } from './utils';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, color } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX(
    'with background', 
    wInfo(`
      description of the component

      ~~~js
        <Button>Click here</Button>
      ~~~
    `)(() => <Button bg={text('bg', 'palegoldenrod')}>Hello world</Button>)
  )
  .addWithJSX('with background 2', () => (
    <Button bg={color('bg', 'green', 'group1')}>Hello world 2</Button>
  ));